import { Link } from "react-router-dom";

function UploadMenu() {
    return (
        <>
            <Link to="/upload/project">
                <p>Upload a Project</p>
            </Link>
            <Link to="/upload/about">
                <p>Upload About info</p>
            </Link>
        </>
    );
}

export default UploadMenu;
