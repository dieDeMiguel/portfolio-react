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
import UploadAbout from "../components/Upload/UploadAbout";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        console.log("cambios projects", projects);
    }, [projects]);

    useEffect(() => {
        axios.get("/api/projects").then((response) => {
            console.log("response dentro de app.js", response.data);
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
                {/* <Route
                    path="/project/:slug"
                    render={(props) => (
                        <Project
                            slug={props.match.params.slug}
                            projects={projects}
                        />
                    )}
                /> */}
                <Route path="/crud/project" render={() => <UploadProject />} />
                <Route path="/crud/about" render={() => <UploadAbout />} />
                <Route path="/upload" render={() => <UploadMenu />} />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
