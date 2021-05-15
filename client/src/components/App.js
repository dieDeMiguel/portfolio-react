import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Project from "./Pages/Project";
import UploadMenu from "../components/Upload/UploadMenu";
import UploadProject from "../components/Upload/UploadProject";
import UploadAboutPage from "../components/Upload/UploadAbout";
import ProjectsList from "../components/Upload/ProjectsList";
import EditProject from "../components/Upload/EditProject";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <Header />
            <BrowserRouter>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects projects={projects} />
                </Route>
                <Route
                    path="/project/:slug"
                    render={(props) => (
                        <Project
                            slug={props.match.params.slug}
                            projects={projects}
                        />
                    )}
                />
                <Route path="/crud/project" render={() => <UploadProject />} />
                <Route
                    path="/edit/projects"
                    render={() => <ProjectsList projects={projects} />}
                />
                <Route path="/crud/about" render={() => <UploadAboutPage />} />
                <Route path="/upload" render={() => <UploadMenu />} />
                <Route
                    path={"/edit/project/:slug"}
                    exact
                    render={(props) => (
                        <EditProject
                            projectSlug={props.match.params.slug}
                            hisotry={props.history}
                        />
                    )}
                />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
