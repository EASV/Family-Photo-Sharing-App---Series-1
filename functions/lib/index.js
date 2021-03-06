'use strict';
const functions = require('firebase-functions');
const mkdirp = require('mkdirp-promise');
// Include a Service Account Key to use a Signed URL
const gcs = require('@google-cloud/storage')();
const admin = require('firebase-admin');
admin.initializeApp();
const spawn = require('child-process-promise').spawn;
const path = require('path');
const os = require('os');
const fs = require('fs');
// Max height and width of the thumbnail in pixels.
const THUMB_MAX_HEIGHT = 200;
const THUMB_MAX_WIDTH = 200;
// Thumbnail prefix added to file names.
const THUMB_PREFIX = 'thumb_';
/**
 * When an image is uploaded in the Storage bucket We generate a thumbnail automatically using
 * ImageMagick.
 * After the thumbnail has been generated and uploaded to Cloud Storage
 */
exports.generateThumbnail = functions.storage.object().onFinalize((object) => {
    if (object.name.indexOf('album-files') > -1) {
        // File and directory paths.
        const filePath = object.name;
        const contentType = object.contentType; // This is the image MIME type
        const fileDir = path.dirname(filePath);
        const fileName = path.basename(filePath);
        const thumbFilePath = path.normalize(path.join(fileDir, `${THUMB_PREFIX}${fileName}`));
        const tempLocalFile = path.join(os.tmpdir(), filePath);
        const tempLocalDir = path.dirname(tempLocalFile);
        const tempLocalThumbFile = path.join(os.tmpdir(), thumbFilePath);
        // Exit if this is triggered on a file that is not an image.
        if (!contentType.startsWith('image/')) {
            console.log('This is not an image.');
            return null;
        }
        // Exit if the image is already a thumbnail.
        if (fileName.startsWith(THUMB_PREFIX)) {
            console.log('Already a Thumbnail.');
            return null;
        }
        // Cloud Storage files.
        const bucket = gcs.bucket(object.bucket);
        const file = bucket.file(filePath);
        const thumbFile = bucket.file(thumbFilePath);
        const metadata = {
            contentType: contentType,
        };
        // Create the temp directory where the storage file will be downloaded.
        return mkdirp(tempLocalDir).then(() => {
            // Download file from bucket.
            return file.download({ destination: tempLocalFile });
        }).then(() => {
            console.log('The file has been downloaded to', tempLocalFile);
            // Generate a thumbnail using ImageMagick.
            return spawn('convert', [tempLocalFile, '-thumbnail', `${THUMB_MAX_WIDTH}x${THUMB_MAX_HEIGHT}>`, tempLocalThumbFile], { capture: ['stdout', 'stderr'] });
        }).then(() => {
            console.log('Thumbnail created at', tempLocalThumbFile);
            // Uploading the Thumbnail.
            return bucket.upload(tempLocalThumbFile, { destination: thumbFilePath, metadata: metadata });
        }).then(() => {
            console.log('Thumbnail uploaded to Storage at', thumbFilePath);
            // Once the image has been uploaded delete the local files to free up disk space.
            fs.unlinkSync(tempLocalFile);
            fs.unlinkSync(tempLocalThumbFile);
            console.log('Thumbnail uploaded.');
        });
    }
});
//# sourceMappingURL=index.js.map