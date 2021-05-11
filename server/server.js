const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { uploader } = require("./upload");
const cryptoRandomString = require("crypto-random-string");
const { s3upload, getURLFromFilename } = require("./s3");
const { Bucket } = require("../config.json");

const {
    createProject,
    getProjects,
    createAbout,
    getProjectBySlug,
    getAboutInfo,
} = require("../db");

app.use(compression());

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/api/projects", async (request, response) => {
    const projects = await getProjects();
    if (!projects) {
        response.statusCode = 400;
        response.json({
            message: "Error while fetching projects",
        });
        return;
    }
    response.json(projects);
});

app.post(
    "/api/project",

    async (request, response) => {
        const { project } = request.body;
        console.log("dentro de db.js reques.body", project);
        response.status(200).json(project);
        // const id = await createProject(project);
        // if (!id) {
        //     response.statusCode = 400;
        //     response.json({
        //         message: "Something went wrong while creating the project",
        //     });
        // }
        // response.json({ message: `Project created with id: ${id}` });
    }
);

app.post("/api/project", async (request, response) => {
    const about = request.body;
    const id = await createAbout(about);
    if (!id) {
        response.statusCode = 400;
        response.json({
            message: "Something went wrong while creating the About info",
        });
    }
    response.json({ message: `About created with id: ${id}` });
});

app.get("/api/project/:slug", async (request, response) => {
    const slug = request.params.slug;
    const project = await getProjectBySlug({ slug });
    if (!project) {
        response.statusCode = 400;
        response.json({
            message: "Error while fetching project by slug",
        });
        return;
    }
    response.json(project);
});

app.get("/api/about", async (request, response) => {
    const aboutInfo = await getAboutInfo();
    if (!aboutInfo) {
        response.statusCode = 400;
        response.json({
            message: "Error while fetching about info",
        });
        return;
    }
    response.json(aboutInfo);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
