import { Link } from "react-router-dom";

function UploadMenu() {
    return (
        <>
            <Link to="/crud/project">
                <p>Upload a Project</p>
            </Link>
            <Link to="/edit/projects">
                <p>Edit Projects</p>
            </Link>
            <Link to="/crud/about">
                <p>Upload About info</p>
            </Link>
        </>
    );
}

export default UploadMenu;
