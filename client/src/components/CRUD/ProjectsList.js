// import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProjectsList({ projects }) {
    function onDelete(slug, heading) {
        if (
            !confirm(`are you sure you want to delete the project ${heading}?`)
        ) {
            return;
        }
        axios
            .delete(`/project/${slug}`)
            .then((results) =>
                console.log(`project ${heading} deleted:`, results)
            )
            .then(() => {
                alert(`Project ${heading} deleted`);
                window.location = "/admin/edit/projects";
            });
    }
    return (
        <>
            <div className="container mb-2 flex mx-auto w-full items-center justify-center">
                <ul className="flex flex-col p-4">
                    {projects.map((project) => {
                        return (
                            <li
                                key={project.slug}
                                className="border-gray-400 flex flex-row mb-4"
                            >
                                <div className="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-red-400">
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium">
                                            {project.heading}
                                        </div>
                                    </div>
                                    <div className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2">
                                        <Link
                                            to={`/admin/edit/project/${project.slug}`}
                                        >
                                            Edit Project
                                        </Link>
                                    </div>
                                    <div className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2">
                                        <button
                                            onClick={() =>
                                                onDelete(
                                                    project.slug,
                                                    project.heading
                                                )
                                            }
                                        >
                                            Delete Project
                                        </button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default ProjectsList;
