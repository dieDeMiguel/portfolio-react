var spicedPg = require("spiced-pg");
const { genSalt, hash: bcryptHash } = require("bcryptjs");
function serializeUser(usersList) {
    return {
        id: usersList.id,
        firstName: usersList.first_name,
        lastName: usersList.last_name,
        profilePicURL: usersList.profilePicURL,
    };
}

function hash(password) {
    return genSalt().then((salt) => bcryptHash(password, salt));
}

function getDatabaseURL() {
    if (process.env.DATABASE_URL) {
        return process.env.DATABASE_URL;
    }
    const { username, password, database } = require("./secrets.json");
    return `postgres:${username}:${password}@localhost:5432/${database}`;
}

function dateFormatter(created_at) {
    return created_at.toDateString();
}

const db = spicedPg(getDatabaseURL());

function createProject({
    info,
    heading,
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
            "INSERT INTO projects (info, heading, title, img, technologies, slug, directory, link, date, git, position) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id",
            [
                info,
                heading,
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
        .query(`SELECT * FROM projects`)
        .then((results) => results.rows[0]);
}

function getAboutInfo() {
    return db.query(`SELECT * FROM about`).then((results) => results.rows[0]);
}

// const trialObject = {
//     info: "hola",
//     heading: "que tal",
//     title: "como estas",
//     img: "todo bien?",
//     technologies: " si si",
//     slug: " aca andamos",
//     directory: "todo tranka",
//     link: "en otras",
//     date: "reeeeee",
//     git: "bien",
// };

//createProject(trialObject).then((results) => console.log(results));

module.exports = {
    getProjectBySlug,
    getProjects,
    getAboutInfo,
    createProject,
    createAbout,
};
