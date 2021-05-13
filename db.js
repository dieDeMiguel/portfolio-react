var spicedPg = require("spiced-pg");
const { genSalt, hash: bcryptHash } = require("bcryptjs");

function getDatabaseURL() {
    if (process.env.DATABASE_URL) {
        return process.env.DATABASE_URL;
    }
    const { username, password, database } = require("./secrets.json");
    return `postgres:${username}:${password}@localhost:5432/${database}`;
}

const db = spicedPg(getDatabaseURL());

function createProject({
    info,
    heading,
    subtitle,
    title,
    img,
    technologies,
    slug,
    directory,
    link,
    date,
    git,
    position,
}) {
    return db
        .query(
            "INSERT INTO projects (info, heading, subtitle, title, img, technologies, slug, directory, link, date, git, position) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id",
            [
                info,
                heading,
                subtitle,
                title,
                img,
                technologies,
                slug,
                directory,
                link,
                date,
                git,
                position,
            ]
        )
        .then((result) => result.rows[0].id);
}

function createAbout({
    first_paragraph,
    second_paragraph,
    third_paragraph,
    fourth_paragraph,
    image_first_row,
    image_second_row,
    third_banner,
    fourth_banner,
    last_paragraph,
    long_paragraph,
}) {
    return db
        .query(
            "INSERT INTO projects (first_paragraph, second_paragraph, third_paragraph, fourth_paragraph, image_first_row, image_second_row, third_banner, fourth_banner, last_paragraph,long_paragraph,) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id",
            [
                first_paragraph,
                second_paragraph,
                third_paragraph,
                fourth_paragraph,
                image_first_row,
                image_second_row,
                third_banner,
                fourth_banner,
                last_paragraph,
                long_paragraph,
            ]
        )
        .then((result) => result.rows[0].id);
}

function getProjectBySlug({ slug }) {
    return db
        .query(`SELECT * FROM projects WHERE slug = $1`, [slug])
        .then((results) => results.rows[0]);
}

function getProjects() {
    return db
        .query(`SELECT * FROM projects ORDER BY position DESC`)
        .then((results) => results.rows);
}

function getAboutInfo() {
    return db.query(`SELECT * FROM about`).then((results) => results.rows[0]);
}

module.exports = {
    getProjectBySlug,
    getProjects,
    getAboutInfo,
    createProject,
    createAbout,
};
