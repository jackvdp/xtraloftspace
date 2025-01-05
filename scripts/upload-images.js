const {put} = require('@vercel/blob');
const fs = require('fs').promises;
const path = require('path');

require('dotenv').config();

async function uploadFile(filePath, folderName) {
    try {
        const fileContent = await fs.readFile(filePath);
        const fileName = path.basename(filePath);
        const blobPath = `${folderName}/${fileName}`;

        const blob = await put(blobPath, fileContent, {
            access: 'public',
            addRandomSuffix: true,
        });

        console.log(`✓ Uploaded: ${blobPath} -> ${blob.url}`);
        return blob;
    } catch (error) {
        console.error(`✗ Failed to upload ${filePath}: ${error.message}`);
    }
}

async function processFolder(folderPath) {
    try {
        const entries = await fs.readdir(folderPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(folderPath, entry.name);

            if (entry.isDirectory()) {
                await processFolder(fullPath);
            } else if (entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
                await uploadFile(fullPath, path.basename(path.dirname(fullPath)));
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
    console.log('Upload complete');
});