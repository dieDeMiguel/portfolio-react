import { useState, useEffect, useRef } from "react";
import axios from "axios";

function EditProject({ projectSlug, history }) {
    const [project, setProject] = useState({});
    const [imageChange, setImageChange] = useState(false);

    useEffect(() => {
        axios.get(`/api/project/${projectSlug}`).then((result) => {
            setProject(result.data);
        });
    }, []);

    function onFormSubmit(event) {
        event.preventDefault();
        if (imageChange) {
            const formData = new FormData();
            formData.append("file", project.file);
            axios
                .post("/upload-picture", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    axios
                        .put(`/api/project/${projectSlug}`, {
                            info: project.info,
                            heading: project.heading,
                            subtitle: project.subtitle,
                            title: project.title,
                            technologies: project.technologies,
                            slug: project.slug,
                            date: project.date,
                            directory: project.directory,
                            link: project.link,
                            git: project.git,
                            position: project.position,
                            img: response.data,
                        })
                        .then(() => {
                            alert(`Project: ${project.title} was modified`);
                            history.push(`edit/project/${project.slug}`);
                        });
                })
                .catch((error) =>
                    console.error("error while uploading picture: ", error)
                );
        } else {
            axios
                .put(`/api/project/${projectSlug}`, {
                    info: project.info,
                    heading: project.heading,
                    subtitle: project.subtitle,
                    title: project.title,
                    technologies: project.technologies,
                    slug: project.slug,
                    date: project.date,
                    directory: project.directory,
                    link: project.link,
                    git: project.git,
                    position: project.position,
                    img: project.img,
                })
                .then(() => {
                    alert(`Project: ${project.title} was modified`);
                    history.push(`edit/project/${project.slug}`);
                });
        }
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
                        Edit Project
                    </h1>
                    <br />
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Info
                        </label>
                        <textarea
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    info: event.target.value,
                                })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="info"
                            id="name"
                            type="text"
                            placeholder="Project's Info"
                            value={project.info}
                            required
                            autoComplete="true"
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    heading: event.target.value,
                                })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="heading"
                            id="tel"
                            type="tel"
                            placeholder="Project's heading"
                            value={project.heading}
                            required
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    title: event.target.value,
                                })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                            id="email"
                            type="text"
                            placeholder="Project's title"
                            value={project.title}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Technologies
                        </label>
                        <input
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    technologies: event.target.value,
                                })
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="technologies"
                            id="message1"
                            type="text"
                            value={project.technologies}
                            placeholder="Project's technologies"
                        ></input>
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Slug
                        </label>
                        <input
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    slug: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="slug"
                            id="message2"
                            type="text"
                            placeholder="Project's slug"
                            value={project.slug}
                            required
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    subtitle: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="subtitle"
                            id="message2"
                            type="text"
                            placeholder="Project's subtitle"
                            value={project.subtitle}
                            required
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    info: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="date"
                            id="message2"
                            type="text"
                            placeholder="Project's date"
                            value={project.date}
                            required
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    directory: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="directory"
                            id="message2"
                            type="text"
                            placeholder="Project's directory"
                            value={project.directory}
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    link: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="link"
                            id="message2"
                            type="text"
                            value={project.link}
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
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    git: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="git"
                            id="message2"
                            type="text"
                            value={project.git}
                            placeholder="Project's git"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Position
                        </label>
                        <input
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    position: event.target.value,
                                })
                            }
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="position"
                            id="message2"
                            type="number"
                            value={project.position}
                            placeholder="Project's git"
                        />
                    </div>
                    <div className="flex flex-col w-full h-72 items-center justify-center bg-grey-lighter">
                        <div className="">
                            <img
                                src={project.img}
                                style={{ maxWidth: "200px" }}
                            />
                        </div>
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
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
                                onChange={(event) => {
                                    setProject({
                                        ...project,
                                        file: event.target.files[0],
                                    });
                                    setImageChange(true);
                                }}
                                type="file"
                                name="file"
                                className="hidden"
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
        </>
    );
}

export default EditProject;
