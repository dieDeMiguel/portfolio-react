const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const {
    getProjects,
    getAboutInfo,
    getProjectBySlug,
} = require("./contentful-functions");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public", "projects")));

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

app.get("/api/project/:slug", async (request, response) => {
    const slug = request.params.slug;
    const project = await getProjectBySlug(slug);
    if (!project) {
        response.statusCode = 400;
        response.json({
            message: "Error while fetching project by slug",
        });
        return;
    }
    response.json(project);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
