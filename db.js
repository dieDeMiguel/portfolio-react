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

function editAbout({
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
    console.log("dentro de DB.js", first_paragraph);
    return db
        .query(
            "UPDATE about SET first_paragraph = $1, second_paragraph = $2, third_paragraph = $3, fourth_paragraph = $4, image_first_row = $5, image_second_row = $6, third_banner = $7, fourth_banner = $8, last_paragraph = $9, long_paragraph = $10  WHERE id = 1 RETURNING id",
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
    return db
        .query(`SELECT * FROM about WHERE id = 1`)
        .then((results) => results.rows[0]);
}

function deleteProjectBySlug({ slug }) {
    return db.query(`DELETE FROM projects WHERE slug = $1`, [slug]);
}

function editProject({
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
    prevSlug,
}) {
    return db.query(
        `
        UPDATE projects
        SET info = $1, heading = $2, subtitle = $3, title = $4, img = $5, technologies = $6, slug = $7, directory = $8, link = $9, date = $10, git = $11, position = $12
        WHERE slug = $13
        `,
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
            prevSlug,
        ]
    );
}

module.exports = {
    editProject,
    deleteProjectBySlug,
    getProjectBySlug,
    getProjects,
    getAboutInfo,
    createProject,
    editAbout,
};
