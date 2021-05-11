import { useState, useEffect } from "react";
import axios from "axios";

function UploadProject() {
    const [info, setInfo] = useState("");
    const [heading, setHeading] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [slug, setSlug] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [date, setDate] = useState("");
    const [directory, setDirectory] = useState("");
    const [link, setLink] = useState("");
    const [git, setGit] = useState("");
    const [file, setFile] = useState("");

    useEffect(() => {
        console.log("cambio el file", file);
    }, [file]);

    function onFormSubmit(event) {
        event.preventDefault();
        const project = {
            info,
            heading,
            title,
            image,
            technologies,
            slug,
            subtitle,
            date,
            directory,
            link,
            git,
            file,
        };
        axios
            .post("/api/project", project)
            .then((results) => console.log("results", results));
    }

    // Input value setter functions
    function onInfoChange(event) {
        setInfo(event.target.value);
    }

    function onHeadingChange(event) {
        setHeading(event.target.value);
    }

    function onTitleChange(event) {
        setTitle(event.target.value);
    }

    function onImageChange(event) {
        setImage(event.target.value);
    }

    function onTechnologiesChange(event) {
        setTechnologies(event.target.value);
    }

    function onSlugChange(event) {
        setSlug(event.target.value);
    }

    function onSubtitleChange(event) {
        setSubtitle(event.target.value);
    }

    function onDateChange(event) {
        setDate(event.target.value);
    }

    function onDirectoryChange(event) {
        setDirectory(event.target.value);
    }

    function onLinkChange(event) {
        setLink(event.target.value);
    }

    function onGitChange(event) {
        setGit(event.target.value);
    }

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    return (
        <>
            <div className=" flex items-center justify-center mt-6 mb-6 ">
                <form
                    onSubmit={onFormSubmit}
                    id="form"
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-3/6"
                >
                    <br />
                    <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
                        Project Upload
                    </h1>
                    <br />
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Info
                        </label>
                        <input
                            onChange={onInfoChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="info"
                            id="name"
                            type="text"
                            placeholder="Project's Info"
                            // required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Heading
                        </label>
                        <input
                            onChange={onHeadingChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="heading"
                            id="tel"
                            type="tel"
                            placeholder="Project's heading"
                            // required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Title
                        </label>
                        <input
                            onChange={onTitleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                            id="email"
                            type="text"
                            placeholder="Project's title"
                            // required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="Date"
                        >
                            Image
                        </label>
                        <input
                            onChange={onImageChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="image"
                            id="date"
                            type="text"
                            placeholder="No image uploaded yet"
                            // required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Technologies
                        </label>
                        <textarea
                            onChange={onTechnologiesChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="technologies"
                            id="message1"
                            type="text"
                            placeholder="Project's technologies"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Slug
                        </label>
                        <input
                            onChange={onSlugChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="slug"
                            id="message2"
                            type="text"
                            placeholder="Project's slug"
                            // required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Subtitle
                        </label>
                        <input
                            onChange={onSubtitleChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="subtitle"
                            id="message2"
                            type="text"
                            placeholder="Project's subtitle"
                            // required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Date
                        </label>
                        <input
                            onChange={onDateChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="date"
                            id="message2"
                            type="text"
                            placeholder="Project's date"
                            // required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Directory
                        </label>
                        <input
                            onChange={onDirectoryChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="directory"
                            id="message2"
                            type="text"
                            placeholder="Project's directory"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Link
                        </label>
                        <input
                            onChange={onLinkChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="link"
                            id="message2"
                            type="text"
                            placeholder="Project's link"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Git
                        </label>
                        <input
                            onChange={onGitChange}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="git"
                            id="message2"
                            type="text"
                            placeholder="Project's git"
                            // required
                        />
                    </div>
                    <div className="flex w-full h-72 items-center justify-center bg-grey-lighter">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                            <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span className="mt-2 text-base leading-normal">
                                Select a file
                            </span>

                            <input
                                onChange={onFileChange}
                                type="file"
                                name="file"
                                className="hidden"
                                // required
                            />
                            <button type="submit">Upload</button>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            style={{ margin: "0 auto" }}
                            id="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            <i className="fab "></i> Submit
                        </button>
                    </div>
                </form>
            </div>
            <script
                src="https://kit.fontawesome.com/1e268974cb.js"
                crossOrigin="anonymous"
            ></script>
            <script src="assets/js/helpers.js"></script>
            <script src="assets/js/whatsapp.js"></script>
        </>
    );
}

export default UploadProject;
