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
                    <Route
                        path="upload/crud/project"
                        render={() => <UploadProject />}
                    />
                    <Route
                        path="upload/crud/about"
                        render={() => <UploadAbout />}
                    />
                    <Route path="/crud/trial">
                        <ProfilePictureUploader />
                    </Route>
                    <Route path="/upload" render={() => <UploadMenu />} />
                </BrowserRouter>
            </div>
        </>
    );
}

export default Upload;
