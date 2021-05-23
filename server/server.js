const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const { uploader } = require("./upload");
const { s3upload, getURLFromFilename } = require("./s3");
const cookieSession = require("cookie-session");

const {
    passport,
    ensureAuthenticated,
    ensureAPIAuthenticated,
} = require("./auth");

let Bucket;
if (process.env.Bucket) {
    Bucket = process.env.Bucket;
} else {
    //Bucket = require("../config.json");
}

const {
    createProject,
    deleteProjectBySlug,
    getProjects,
    getProjectBySlug,
    getAboutInfo,
    editProject,
    editAbout,
    uploadAboutImage,
} = require("../db");

app.use(compression());
app.use(express.json());

app.use(
    express.urlencoded({
        extended: false,
    })
);

const cookieSessionMiddleware = cookieSession({
    secret: "Life is bad",
    maxAge: 1000 * 60 * 60 * 24 * 90,
});

app.use(cookieSessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

//Admin
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "login.html"));
});

app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/admin");
    }
);

app.get("/admin", ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "admin.html"));
});

app.get("/admin/*", ensureAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "admin.html"));
});

// Image Upload

app.post(
    "/upload-picture",
    uploader.single("file"),
    s3upload,
    (request, response) => {
        const imageURL = getURLFromFilename(request.file.filename, Bucket);
        response.json(imageURL);
    }
);

// Projects
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

app.put(
    "/api/project/:slug",
    ensureAPIAuthenticated,
    async (request, response) => {
        const prevSlug = request.params.slug;
        const editedProject = request.body;
        await editProject({ ...editedProject, prevSlug });
        response
            .status(200)
            .json({ message: `Project ${prevSlug} was updated` });
    }
);

app.delete("/project/:slug", async (request, response) => {
    const slug = request.params.slug;
    await deleteProjectBySlug({ slug });
    response.status(200).json({ message: `Project: ${slug} deleted` });
});

app.post("/api/project", async (request, response) => {
    const project = request.body;
    const id = await createProject(project);
    if (!id) {
        response.statusCode = 400;
        response.json({
            message: "Something went wrong while creating the project",
        });
    }
    response.json({ message: `Project created with id: ${id}` });
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

//About

app.post("/api/about", async (request, response) => {
    const about = request.body;
    const _id = await editAbout({ ...about });
    if (!_id) {
        response
            .status(400)
            .json({ message: "something went wrong while updating about" });
    }
    response.json({ message: `succes, project with id: ${_id}` });
});

app.post("/api/image/about", async (request, response) => {
    const obj = request.body;
    const _id = await uploadAboutImage(obj);
    if (!_id) {
        response.status(400).json({
            message:
                "something went wrong while updating the image data to the about table",
        });
    }
    response.json({ message: `succes, about image updated with id: ${_id}` });
});

app.get("/api/about", async (request, response) => {
    const about = await getAboutInfo();
    if (!about) {
        response.status(400).json({
            message: "Something went wrong while fetching about info",
        });
    }
    response.json(about);
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
