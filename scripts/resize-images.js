#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function processImage(imagePath) {
    try {
        const image = sharp(imagePath);
        const metadata = await image.metadata();

        // Calculate width to maintain aspect ratio
        const aspectRatio = metadata.width / metadata.height;
        const newWidth = Math.round(1200 * aspectRatio);

        await image
            .resize(newWidth, 1200, {fit: 'inside'})
            .toBuffer()
            .then(buffer => fs.writeFile(imagePath, buffer));

        console.log(`✓ Processed: ${path.basename(imagePath)}`);
    } catch (error) {
        console.error(`✗ Failed to process ${path.basename(imagePath)}: ${error.message}`);
    }
}

async function processFolder(folderPath) {
    try {
        const entries = await fs.readdir(folderPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(folderPath, entry.name);

            if (entry.isDirectory()) {
                await processFolder(fullPath);
            } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
                await processImage(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error processing folder ${folderPath}: ${error.message}`);
    }
}

// Get folder path from command line argument
const folderPath = process.argv[2];
if (!folderPath) {
    console.error('Please provide a folder path');
    process.exit(1);
}

processFolder(folderPath).then(() => {
    console.log('Processing complete');
});