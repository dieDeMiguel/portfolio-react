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

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/api/projects", async (request, response) => {
    const projects = await getProjects();
    if (!projects) {
        response.statusCode = 400;
        response.error("Error while fetching projects: ", error);
    }
    response.json(projects);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
