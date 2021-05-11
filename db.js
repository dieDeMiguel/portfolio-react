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
}) {
    return db
        .query(
            "INSERT INTO projects (info, heading, title, img, technologies, slug, directory, link, date, git) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id",
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
            ]
        )
        .then((result) => result.rows[0].id);
}

const trialObject = {
    info: "hola",
    heading: "que tal",
    title: "como estas",
    img: "todo bien?",
    technologies: " si si",
    slug: " aca andamos",
    directory: "todo tranka",
    link: "en otras",
    date: "reeeeee",
    git: "bien",
};

createProject(trialObject).then((results) => console.log(results));

module.exports = {
    createProject,
};
