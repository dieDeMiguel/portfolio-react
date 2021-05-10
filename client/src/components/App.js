import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Project from "./Project";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const projects = await axios.get("/api/projects");
        setProjects(projects.data);
    };

    useEffect(() => {
        fetchProjects();
        //console.log("projects dentro de App", projects);
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
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
