// app/api/generate-thumbnails/route.ts
import {list, put} from '@vercel/blob';
import sharp from 'sharp';
import {NextResponse} from 'next/server';

const THUMBNAIL_WIDTH = 300;
const THUMBNAIL_QUALITY = 80;

async function downloadImage(url: string): Promise<Buffer> {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

async function generateThumbnail(imageBuffer: Buffer): Promise<Buffer> {
    return sharp(imageBuffer)
        .resize(THUMBNAIL_WIDTH, null, {
            fit: 'contain',
            withoutEnlargement: true
        })
        .webp({quality: THUMBNAIL_QUALITY})
        .toBuffer();
}

async function processImage(imageUrl: string, pathname: string) {
    try {
        // Download the original image
        const imageBuffer = await downloadImage(imageUrl);

        // Generate thumbnail
        const thumbnailBuffer = await generateThumbnail(imageBuffer);

        // Create thumbnail pathname
        const pathParts = pathname.split('.');
        const thumbnailPath = pathParts.slice(0, -1).join('.') + '-thumb.webp';

        // Upload thumbnail to blob storage
        await put(thumbnailPath, thumbnailBuffer, {
            contentType: 'image/webp',
            access: 'public'
        });

        return {
            original: pathname,
            thumbnail: thumbnailPath,
            success: true
        };
    } catch (error) {
        console.error(`Failed to process ${pathname}:`, error);
        return {
            original: pathname,
            error: error instanceof Error ? error.message : 'Unknown error',
            success: false
        };
    }
}

export async function GET() {
    try {
        const results: Array<{
            original: string;
            thumbnail?: string;
            error?: string;
            success: boolean;
        }> = [];

        // Get all files from blob storage
        const {blobs} = await list();

        // Filter for images only
        const imageBlobs = blobs.filter(blob =>
            blob.pathname.match(/\.(jpg|jpeg|png|webp|gif)$/i) &&
            !blob.pathname.includes('-thumb') // Exclude existing thumbnails
        );

        // Process images in batches of 3 to avoid overwhelming the system
        const batchSize = 3;
        for (let i = 0; i < imageBlobs.length; i += batchSize) {
            const batch = imageBlobs.slice(i, i + batchSize);
            const batchResults = await Promise.all(
                batch.map(blob => processImage(blob.url, blob.pathname))
            );
            results.push(...batchResults);

            // Optional: Add a small delay between batches
            if (i + batchSize < imageBlobs.length) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        // Summarize results
        const summary = {
            total: results.length,
            successful: results.filter(r => r.success).length,
            failed: results.filter(r => !r.success).length,
            results
        };

        return NextResponse.json(summary, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Failed to generate thumbnails:', error);
        return NextResponse.json(
            {error: 'Failed to generate thumbnails'},
            {status: 500}
        );
    }
}