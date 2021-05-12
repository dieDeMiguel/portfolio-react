import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("/api/projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <div className="sm:text-center lg:text-center mt-40">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl sm:text-2xl text-center">
                    <span className="block text-indigo-600 xl:inline">
                        My projectList
                    </span>
                </h1>
            </div>
            <div className="flex items-center justify-center mt-32 mb-40  0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                    {projects.map((project) => {
                        const href = `/project/${project.slug}`;
                        return (
                            <div
                                key={project.slug}
                                className="relative bg-white pb-5  rounded-3xl w-72 sm:w-60 2xl:w-72 my-2 shadow-xl"
                            >
                                <img
                                    className="w-full h-2/4 object-cover"
                                    src={project.img}
                                    alt={project.title}
                                />
                                <div className="mt-8 px-5 md:px-3 lg:px-5">
                                    <p className="text-xl font-semibold my-4">
                                        <a href={href}>{project.heading}</a>
                                    </p>
                                    <div className="flex space-x-2 text-gray-400 text-sm my-3">
                                        {project.date}
                                    </div>
                                    <div className="flex space-x-2 text-gray-600 text-sm">
                                        <p>{project.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;
