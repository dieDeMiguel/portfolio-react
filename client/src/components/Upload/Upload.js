import { BrowserRouter, Route, Link } from "react-router-dom";
import UploadMenu from "./UploadMenu";
import UploadProject from "./UploadProject";
import UploadAbout from "./UploadAbout";

function Upload() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <h2>Upload Forms for Diego's Portfolio</h2>
                    <Route path="/upload" render={() => <UploadMenu />} />
                    <Route
                        path="/upload/project"
                        render={() => <UploadProject />}
                    />
                    <Route
                        path="/upload/about"
                        render={() => <UploadAbout />}
                    />
                </BrowserRouter>
            </div>
        </>
    );
}

export default Upload;
