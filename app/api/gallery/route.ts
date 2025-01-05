// app/api/gallery/route.ts
import {list} from '@vercel/blob';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const folder = searchParams.get('folder');

    if (!folder) {
        return NextResponse.json({error: 'Folder parameter is required'}, {status: 400});
    }

    try {
        console.log('Fetching images from folder:', folder);
        const {blobs} = await list({prefix: folder});

        // Transform the data to only send what's needed
        const images = blobs.map(blob => ({
            url: blob.url,
            pathname: blob.pathname,
            uploadedAt: blob.uploadedAt
        }));

        console.log('images:', images.length);

        // Cache the response for 1 hour
        return NextResponse.json(
            {images},
            {
                headers: {
                    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
                }
            }
        );
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({error: 'Failed to fetch images'}, {status: 500});
    }
}