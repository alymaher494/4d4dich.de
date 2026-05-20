/**
 * Image Compression Script
 * Converts JPG/PNG to optimized WebP + keeps compressed originals
 * Run: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir, rename } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

const IMAGE_DIR = './public/images';
const QUALITY_WEBP = 80;
const QUALITY_JPEG = 82;
const MAX_WIDTH = 1920;

let totalSaved = 0;
let filesProcessed = 0;

async function getFiles(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...await getFiles(fullPath));
        } else {
            const ext = extname(entry.name).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

async function compressImage(filePath) {
    try {
        const originalStat = await stat(filePath);
        const originalSize = originalStat.size;
        const ext = extname(filePath).toLowerCase();
        const dir = dirname(filePath);
        const name = basename(filePath, extname(filePath));

        // Compress original format
        let pipeline = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

        if (ext === '.png') {
            pipeline = pipeline.png({ quality: QUALITY_JPEG, compressionLevel: 9 });
        } else {
            pipeline = pipeline.jpeg({ quality: QUALITY_JPEG, progressive: true, mozjpeg: true });
        }

        const compressedBuffer = await pipeline.toBuffer();

        // Only write if smaller
        if (compressedBuffer.length < originalSize) {
            const saved = originalSize - compressedBuffer.length;
            totalSaved += saved;

            // Backup original then overwrite
            await sharp(filePath)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                .jpeg({ quality: QUALITY_JPEG, progressive: true, mozjpeg: true })
                .toFile(filePath + '.tmp');

            await rename(filePath + '.tmp', filePath);

            console.log(`✅ ${basename(filePath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(compressedBuffer.length / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
        } else {
            console.log(`⏭️  ${basename(filePath)}: already optimized`);
        }

        // Also create WebP version
        const webpPath = join(dir, name + '.webp');
        await sharp(filePath)
            .resize({ width: MAX_WIDTH, withoutEnlargement: true })
            .webp({ quality: QUALITY_WEBP })
            .toFile(webpPath);

        filesProcessed++;
    } catch (err) {
        console.error(`❌ Error processing ${filePath}:`, err.message);
    }
}

async function main() {
    console.log('🖼️  Starting image compression...\n');
    const files = await getFiles(IMAGE_DIR);
    console.log(`Found ${files.length} images to process\n`);

    for (const file of files) {
        await compressImage(file);
    }

    console.log(`\n✨ Done! Processed ${filesProcessed} files`);
    console.log(`💾 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);
