//const secrets = require("../secrets.json");

const contentful_space =
    process.env.contentful_space || secrets.contentful_space;
const contentful_key = process.env.contentful_key || secrets.contentful_key;

const contentful = require("contentful");

const client = contentful.createClient({
    space: contentful_space,
    accessToken: contentful_key,
});

function serializeProject(item) {
    const fields = item.fields;
    const img = `https:${fields.img.fields.file.url}`;
    const info = item.fields.info.content[0].content[0].value;
    return {
        ...fields,
        img,
        info,
    };
}

function serializeAboutInfo(item) {
    const fields = item.fields;
    const imageFirstRow = `https:${fields.imageFirstRow.fields.file.url}`;
    const imageSecondRow = `https:${fields.imageSecondRow.fields.file.url}`;
    const firstBanner = `https:${fields.firstBanner.fields.file.url}`;
    const secondBanner = `https:${fields.secondBanner.fields.file.url}`;
    const thirdBanner = `https:${fields.thirdBanner.fields.file.url}`;
    const fourthBanner = `https:${fields.fourthBanner.fields.file.url}`;
    return {
        ...fields,
        imageFirstRow,
        imageSecondRow,
        firstBanner,
        secondBanner,
        thirdBanner,
        fourthBanner,
    };
}

function getProjects() {
    return client
        .getEntries({
            content_type: "pageProject",
        })
        .then((results) => results.items.map(serializeProject));
}

function getProjectBySlug(slug) {
    return client
        .getEntries({
            content_type: "pageProject",
            "fields.slug[in]": slug,
        })
        .then((results) => results.items.map(serializeProject)[0]);
}

function getAboutInfo() {
    return client
        .getEntries({
            content_type: "about",
        })
        .then((results) => results.items.map(serializeAboutInfo));
}

module.exports = {
    getAboutInfo,
    getProjects,
    getProjectBySlug,
};
