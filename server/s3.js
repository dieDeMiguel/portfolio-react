const { S3 } = require("aws-sdk");
const fs = require("fs");
const { Bucket } = require("../config.json");

let AWS_KEY;
let AWS_SECRET;
if (process.env.AWS_KEY && process.env.AWS_SECRET) {
    AWS_KEY = process.env.AWS_KEY;
    AWS_SECRET = process.env.AWS_SECRET;
} else {
    // AWS_KEY = require("../config.json");
    // AWS_SECRET = require("../config.json");
}

const s3 = new S3({
    accessKeyId: AWS_KEY,
    secretAccessKey: AWS_SECRET,
});

// it's a middleware: in the name of the request, the response and the next
function s3upload(request, response, next) {
    if (!request.file) {
        console.log("[imageboard:s3] file not there");
        response.sendStatus(500);
        return;
    }
    const { filename, mimetype, size, path } = request.file;

    console.log("[imageboard:s3] uploading to s3...", {
        Bucket,
        Key: filename,
        ContentType: mimetype,
        ContentLength: size,
    });

    s3.putObject({
        Bucket,
        ACL: "public-read",
        Key: filename,
        Body: fs.createReadStream(path),
        ContentType: mimetype,
        ContentLength: size,
    })
        .promise()
        .then(() => {
            console.log("[imageboard:s3] uploaded to s3");
            next();
            // delete original file after upload
            fs.unlink(path, () => {});
        })
        .catch((error) => {
            console.log("[imageboard:s3] error uploading to s3", error);
            response.sendStatus(500);
        });
}

function getURLFromFilename(fileName, Bucket) {
    return `https://s3.amazonaws.com/${Bucket}/${fileName}`;
}

module.exports = {
    s3upload,
    getURLFromFilename,
};
