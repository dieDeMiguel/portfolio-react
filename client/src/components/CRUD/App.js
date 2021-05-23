import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import UploadMenu from "./UploadMenu";
import UploadProject from "./UploadProject";
import UploadAboutPage from "./UploadAbout";
import ProjectsList from "./ProjectsList";
import EditProject from "./EditProject";

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
                <Route
                    path="/admin/crud/project"
                    render={() => <UploadProject />}
                />
                <Route
                    path="/admin/edit/projects"
                    render={() => {
                        console.log("yo");
                        return <ProjectsList projects={projects} />;
                    }}
                />
                <Route
                    path="/admin/crud/about"
                    render={(props) => (
                        <UploadAboutPage history={props.history} />
                    )}
                />
                <Route exact path="/admin" render={() => <UploadMenu />} />
                <Route
                    path={"/admin/edit/project/:slug"}
                    exact
                    render={(props) => (
                        <EditProject
                            projectSlug={props.match.params.slug}
                            history={props.history}
                        />
                    )}
                />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
