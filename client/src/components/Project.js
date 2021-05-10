import { useEffect, useState } from "react";
import axios from "axios";

function Project({ slug, projects }) {
    projects = projects.filter((x) => x.slug != slug);

    const [project, setProject] = useState([]);

    const fetchProject = async () => {
        const project = await axios.get(`/api/project/${slug}`);
        setProject(project.data);
    };

    useEffect(() => {
        fetchProject();
    }, []);
    return (
        <>
            <script
                src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
                defer=""
            ></script>
            <section className="px-5">
                <div className="container py-16 mx-auto rounded-xl">
                    <div
                        className="shadow rounded-xl"
                        x-data="{ tab: 'preview2' }"
                    >
                        <div
                            className=" rounded-b-xl"
                            x-show="tab === 'preview2'"
                        >
                            <section className="text-gray-700 body-font">
                                <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
                                    <div className="flex flex-col w-full pt-0 sm:mb-6 text-left lg:flex-grow md:w-1/2 xl:mr-6 md:pr-2 md:items-start md:mb-0 xl:max-h-96">
                                        <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500black title-font">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="mb-2 text-5xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                                            {project.heading}
                                        </h1>
                                        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                                            <div className="flex flex-col items-start p-4 text-left md:w-11/12 md:mb-0">
                                                <div className="flex-grow">
                                                    <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                                                        {project.date}
                                                    </h2>
                                                    <p className="text-base leading-relaxed">
                                                        {project.info}
                                                    </p>
                                                    <div className="links flex flex-col">
                                                        {project.URL ? (
                                                            <p className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                                <a
                                                                    target="_blank"
                                                                    className="font-semibold text-blue-700 hover:text-blue-400"
                                                                    href={
                                                                        project.URL
                                                                    }
                                                                >
                                                                    Go to
                                                                    project
                                                                </a>
                                                            </p>
                                                        ) : (
                                                            <p className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                                <a
                                                                    target="_blank"
                                                                    className="font-semibold text-blue-700 hover:text-blue-400"
                                                                    href={
                                                                        project.directory
                                                                    }
                                                                >
                                                                    Go to
                                                                    project
                                                                </a>
                                                            </p>
                                                        )}

                                                        {project.gitRepository && (
                                                            <p className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                                <a
                                                                    target="_blank"
                                                                    className="font-semibold text-blue-700 hover:text-blue-400"
                                                                    href={
                                                                        project.gitRepository
                                                                    }
                                                                >
                                                                    Go to git
                                                                    repository
                                                                </a>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-5/6 lg:max-w-2xl md:w-1/2 md:mt-0 shadow-xl">
                                        <img
                                            className="object-cover object-center rounded-lg"
                                            alt="hero"
                                            src={project.img}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div
                            className=" rounded-b-2xl"
                            x-show="tab === 'code2'"
                            style={{ display: "none" }}
                        >
                            <div className="h-screen overflow-auto overflow-y-scroll bg-blueGray-900 text-blueGray-200 rounded-b-xl code-tab">
                                <div className="rounded-b-xl">
                                    <div className="hidden" id="headerTwo">
                                        <section className="text-gray-700 body-font">
                                            <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
                                                <div className="flex flex-col w-full pt-0 lg:mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
                                                    <h2 className="mb-1 text-xs font-medium tracking-widest text-blue-500black title-font">
                                                        {project.subtitle}
                                                    </h2>
                                                    <h1 className="text-5xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                                                        {project.heading}
                                                    </h1>
                                                    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                                                        <div className="flex flex-col items-start p-4 md:mb-6 text-left md:w-11/12 md:mb-0">
                                                            <div className="flex-grow">
                                                                <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                                                                    {
                                                                        project.date
                                                                    }
                                                                </h2>
                                                                <p className="text-base leading-relaxed">
                                                                    {
                                                                        project.info
                                                                    }
                                                                </p>
                                                                <a
                                                                    href={
                                                                        project.directory
                                                                    }
                                                                    className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 sm:mt-4 lg:mt-30 "
                                                                >
                                                                    Go to
                                                                    project
                                                                    <svg
                                                                        className="w-4 h-4 ml-2"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        width="20"
                                                                        height="20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            fill="none"
                                                                            d="M0 0h24v24H0z"
                                                                        />
                                                                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 mt-6 md:mt-0 shadow-xl">
                                                    <img
                                                        className="object-cover object-center rounded-lg "
                                                        alt="hero"
                                                        src={project.img}
                                                    />
                                                </div>
                                            </div>
                                        </section>
                                        <pre
                                            className="leading-6 rainbow-show"
                                            data-trimmed="true"
                                        >
                                            <code
                                                data-language="html"
                                                className="rainbow rainbow-show rb1"
                                            >
                                                <span
                                                    id="rb1ln1"
                                                    className="line"
                                                    data-line="1"
                                                ></span>
                                                <span
                                                    id="rb1ln2"
                                                    className="line"
                                                    data-line="2"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        section
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    text-gray-700 body-font
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln3"
                                                    className="line"
                                                    data-line="3"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    container flex flex-col
                                                    items-center px-5 py-16
                                                    mx-auto md:flex-row lg:px-28
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln4"
                                                    className="line"
                                                    data-line="4"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln5"
                                                    className="line"
                                                    data-line="5"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex flex-col w-full pt-0
                                                    mb-16 text-left lg:flex-grow
                                                    md:w-1/2 xl:mr-20 md:pr-24
                                                    md:items-start md:mb-0{" "}
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln6"
                                                    className="line"
                                                    data-line="6"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    mb-1 text-xs font-medium
                                                    tracking-widest
                                                    text-blue-500black
                                                    title-font
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                Your tagline
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln7"
                                                    className="line"
                                                    data-line="7"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        h1
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    mb-8 text-2xl font-bold
                                                    tracking-tighter text-left
                                                    text-black lg:text-5xl
                                                    title-font
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln8"
                                                    className="line"
                                                    data-line="8"
                                                ></span>{" "}
                                                Medium length display headline
                                                to convert.
                                                <span
                                                    id="rb1ln9"
                                                    className="line"
                                                    data-line="9"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        h1
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln10"
                                                    className="line"
                                                    data-line="10"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex flex-wrap -mx-4 -mt-4
                                                    -mb-10 sm:-m-4{" "}
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln11"
                                                    className="line"
                                                    data-line="11"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex flex-col items-start
                                                    p-4 mb-6 text-left md:w-1/2
                                                    md:mb-0
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln12"
                                                    className="line"
                                                    data-line="12"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln13"
                                                    className="line"
                                                    data-line="13"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    inline-flex items-center
                                                    justify-center flex-shrink-0
                                                    w-12 h-12 mb-5 text-black
                                                    bg-gray-200 rounded-full
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln14"
                                                    className="line"
                                                    data-line="14"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    w-6 h-6
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    xmlns
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    http://www.w3.org/2000/svg
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    viewBox
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    0 0 24 24
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    width
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    18
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln15"
                                                    className="line"
                                                    data-line="15"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    height
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    18
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    currentColor
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln16"
                                                    className="line"
                                                    data-line="16"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    none
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M0 0h24v24H0z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln17"
                                                    className="line"
                                                    data-line="17"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln18"
                                                    className="line"
                                                    data-line="18"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M14 10h-4v4h4v-4zm2
                                                    0v4h3v-4h-3zm-2
                                                    9v-3h-4v3h4zm2
                                                    0h3v-3h-3v3zM14
                                                    5h-4v3h4V5zm2 0v3h3V5h-3zm-8
                                                    5H5v4h3v-4zm0 9v-3H5v3h3zM8
                                                    5H5v3h3V5zM4 3h16a1 1 0 0 1
                                                    1 1v16a1 1 0 0 1-1 1H4a1 1 0
                                                    0 1-1-1V4a1 1 0 0 1 1-1z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln19"
                                                    className="line"
                                                    data-line="19"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln20"
                                                    className="line"
                                                    data-line="20"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln21"
                                                    className="line"
                                                    data-line="21"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex-grow
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln22"
                                                    className="line"
                                                    data-line="22"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    mb-3 text-lg font-medium
                                                    tracking-tighter
                                                    text-gray-700 title-font
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln23"
                                                    className="line"
                                                    data-line="23"
                                                ></span>{" "}
                                                Information 1
                                                <span
                                                    id="rb1ln24"
                                                    className="line"
                                                    data-line="24"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln25"
                                                    className="line"
                                                    data-line="25"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        p
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    text-base leading-relaxed
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                Explain 2 great feature here.
                                                Information about the
                                                <span
                                                    id="rb1ln26"
                                                    className="line"
                                                    data-line="26"
                                                ></span>{" "}
                                                feature.
                                                <span
                                                    id="rb1ln27"
                                                    className="line"
                                                    data-line="27"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        p
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln28"
                                                    className="line"
                                                    data-line="28"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        a
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    href
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    #
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln29"
                                                    className="line"
                                                    data-line="29"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    inline-flex items-center
                                                    font-semibold text-blue-700
                                                    md:mb-2 lg:mb-0
                                                    hover:text-blue-400{" "}
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln30"
                                                    className="line"
                                                    data-line="30"
                                                ></span>{" "}
                                                Learn More
                                                <span
                                                    id="rb1ln31"
                                                    className="line"
                                                    data-line="31"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    w-4 h-4 ml-2
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    xmlns
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    http://www.w3.org/2000/svg
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    viewBox
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    0 0 24 24
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln32"
                                                    className="line"
                                                    data-line="32"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    width
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    20
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    height
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    20
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    currentColor
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln33"
                                                    className="line"
                                                    data-line="33"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    none
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M0 0h24v24H0z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln34"
                                                    className="line"
                                                    data-line="34"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln35"
                                                    className="line"
                                                    data-line="35"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M16.172 11l-5.364-5.364
                                                    1.414-1.414L20 12l-7.778
                                                    7.778-1.414-1.414L16.172
                                                    13H4v-2z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln36"
                                                    className="line"
                                                    data-line="36"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln37"
                                                    className="line"
                                                    data-line="37"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        a
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln38"
                                                    className="line"
                                                    data-line="38"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln39"
                                                    className="line"
                                                    data-line="39"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln40"
                                                    className="line"
                                                    data-line="40"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex flex-col items-start
                                                    p-4 mb-6 text-left md:w-1/2
                                                    md:mb-0
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln41"
                                                    className="line"
                                                    data-line="41"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln42"
                                                    className="line"
                                                    data-line="42"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    inline-flex items-center
                                                    justify-center flex-shrink-0
                                                    w-12 h-12 mb-5 text-black
                                                    bg-gray-200 rounded-full
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln43"
                                                    className="line"
                                                    data-line="43"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    w-6 h-6
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    xmlns
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    http://www.w3.org/2000/svg
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    viewBox
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    0 0 24 24
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    width
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    18
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln44"
                                                    className="line"
                                                    data-line="44"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    height
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    18
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    currentColor
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln45"
                                                    className="line"
                                                    data-line="45"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    none
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M0 0h24v24H0z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln46"
                                                    className="line"
                                                    data-line="46"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln47"
                                                    className="line"
                                                    data-line="47"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M21 3a1 1 0 0 1 1 1v16a1 1 0
                                                    0 1-1 1H3a1 1 0 0 1-1-1V4a1
                                                    1 0 0 1 1-1h18zM11
                                                    13H4v6h7v-6zm9
                                                    0h-7v6h7v-6zm-9-8H4v6h7V5zm9
                                                    0h-7v6h7V5z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln48"
                                                    className="line"
                                                    data-line="48"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln49"
                                                    className="line"
                                                    data-line="49"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln50"
                                                    className="line"
                                                    data-line="50"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    flex-grow
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln51"
                                                    className="line"
                                                    data-line="51"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    mb-3 text-lg font-medium
                                                    tracking-tighter
                                                    text-gray-700 title-font
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln52"
                                                    className="line"
                                                    data-line="52"
                                                ></span>{" "}
                                                Information 1
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        h2
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln53"
                                                    className="line"
                                                    data-line="53"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        p
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    text-base leading-relaxed
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                Explain 2 great feature here.
                                                Information about the
                                                <span
                                                    id="rb1ln54"
                                                    className="line"
                                                    data-line="54"
                                                ></span>{" "}
                                                feature.
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        p
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln55"
                                                    className="line"
                                                    data-line="55"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        a
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    href
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    #
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln56"
                                                    className="line"
                                                    data-line="56"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    inline-flex items-center
                                                    font-semibold text-blue-700
                                                    md:mb-2 lg:mb-0
                                                    hover:text-blue-400{" "}
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln57"
                                                    className="line"
                                                    data-line="57"
                                                ></span>{" "}
                                                Learn More
                                                <span
                                                    id="rb1ln58"
                                                    className="line"
                                                    data-line="58"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    w-4 h-4 ml-2
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    xmlns
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    http://www.w3.org/2000/svg
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    viewBox
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    0 0 24 24
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln59"
                                                    className="line"
                                                    data-line="59"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    width
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    20
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    height
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    20
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    currentColor
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln60"
                                                    className="line"
                                                    data-line="60"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    fill
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    none
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M0 0h24v24H0z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln61"
                                                    className="line"
                                                    data-line="61"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        path
                                                    </span>
                                                </span>
                                                <span
                                                    id="rb1ln62"
                                                    className="line"
                                                    data-line="62"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    d
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    M16.172 11l-5.364-5.364
                                                    1.414-1.414L20 12l-7.778
                                                    7.778-1.414-1.414L16.172
                                                    13H4v-2z
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support tag close">
                                                    /&gt;
                                                </span>
                                                <span
                                                    id="rb1ln63"
                                                    className="line"
                                                    data-line="63"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        svg
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln64"
                                                    className="line"
                                                    data-line="64"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        a
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln65"
                                                    className="line"
                                                    data-line="65"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln66"
                                                    className="line"
                                                    data-line="66"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln67"
                                                    className="line"
                                                    data-line="67"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln68"
                                                    className="line"
                                                    data-line="68"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln69"
                                                    className="line"
                                                    data-line="69"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    w-full lg:w-5/6 lg:max-w-lg
                                                    md:w-1/2
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln70"
                                                    className="line"
                                                    data-line="70"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag-name">
                                                        img
                                                    </span>
                                                </span>{" "}
                                                <span className="support attribute">
                                                    className
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    object-cover object-center
                                                    rounded-lg{" "}
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>{" "}
                                                <span className="support attribute">
                                                    alt
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    hero
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span
                                                    id="rb1ln71"
                                                    className="line"
                                                    data-line="71"
                                                ></span>{" "}
                                                <span className="support attribute">
                                                    src
                                                </span>
                                                <span className="support operator">
                                                    =
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="string value">
                                                    https://dummyimage.com/720x600/F3F4F7/8693ac
                                                </span>
                                                <span className="string quote">
                                                    "
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln72"
                                                    className="line"
                                                    data-line="72"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln73"
                                                    className="line"
                                                    data-line="73"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        div
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln74"
                                                    className="line"
                                                    data-line="74"
                                                ></span>{" "}
                                                <span className="support tag">
                                                    <span className="support tag">
                                                        &lt;
                                                    </span>
                                                    <span className="support tag special">
                                                        /
                                                    </span>
                                                    <span className="support tag-name">
                                                        section
                                                    </span>
                                                </span>
                                                <span className="support tag close">
                                                    &gt;
                                                </span>
                                                <span
                                                    id="rb1ln75"
                                                    className="line"
                                                    data-line="75"
                                                ></span>{" "}
                                            </code>
                                            <div className="preloader">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="sm:text-center lg:text-center"
                style={{ marginTop: "4%" }}
            >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-indigo-200 xl:inline text-center">
                        More projects
                    </span>
                </h1>
                <div
                    className="flex items-center justify-center mb-14"
                    style={{ marginTop: "5rem" }}
                >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                        {projects.map((project) => {
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
                                            <a href="/project/slug}}">
                                                {project.heading}
                                            </a>
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
            </div>
        </>
    );
}

export default Project;
