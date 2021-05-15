import { useState, useEffect } from "react";
import axios from "axios";

function UploadAboutPage() {
    const [about, setAbout] = useState("");
    const [imageChange, setImageChange] = useState(false);

    useEffect(() =>
        axios
            .get("/api/about")
            .then((response) => {
                setAbout(response.data);
            })
            .catch((error) =>
                console.log("error while fetching about info", error)
            )
    );

    function onImageFormSubmit(event) {
        event.preventDefault();
        if (imageChange) {
            const formData = new FormData();
            formData.append(about.column, about.file);
            axios
                .post("/upload-picture", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    var key = about.column;
                    var object = {};
                    object[key] = response;
                    axios.put(`/api/about`, object).then(() => {
                        alert(
                            `The follwong column in about was uploaded: ${about.column}`
                        );
                        window.location = "/upload";
                    });
                })
                .catch((error) =>
                    console.error("error while uploading picture: ", error)
                );
        }
    }

    function onFormSubmit(event) {
        event.preventDefault();
        console.log("entroooo");
        axios
            .post("/api/about", {
                ...about,
            })
            .then((message) => {
                console.log(message);
                alert(`About parapraphs were uploaded`);
                window.location = "/upload";
            })
            .catch((error) =>
                console.error("error while uploading about paragraphs: ", error)
            );
    }

    return (
        <>
            <div className=" flex flex-col items-center justify-center mt-6 mb-6 ">
                <form
                    onSubmit={onFormSubmit}
                    id="form"
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-3/6"
                >
                    <br />
                    <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
                        About Page Upload
                    </h1>
                    <br />
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            First Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    first_paragraph: event.target.value,
                                });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="info"
                            id="name"
                            type="text"
                            placeholder="First paragraph"
                            value={about.first_paragraph}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Second Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    second_paragraph: event.target.value,
                                });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="heading"
                            id="tel"
                            type="tel"
                            placeholder="Second paragraph"
                            value={about.second_paragraph}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Third Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    third_paragraph: event.target.value,
                                });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="title"
                            id="email"
                            type="text"
                            placeholder="Third paragraph"
                            value={about.third_paragraph}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Fourth Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    fourth_paragraph: event.target.value,
                                });
                            }}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="technologies"
                            id="message1"
                            type="text"
                            placeholder="Fourth paragraph"
                            value={about.fourth_paragraph}
                            required
                        ></input>
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Last Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    last_paragraph: event.target.value,
                                });
                            }}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="slug"
                            id="message2"
                            type="text"
                            placeholder="Last Paragraph"
                            value={about.last_paragraph}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Long Paragraph
                        </label>
                        <input
                            onChange={(event) => {
                                setAbout({
                                    ...about,
                                    long_paragraph: event.target.value,
                                });
                            }}
                            className="bshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="subtitle"
                            id="message2"
                            type="text"
                            placeholder="Long paragraph"
                            value={about.long_paragraph}
                            required
                        />
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
                <form
                    onSubmit={onImageFormSubmit}
                    id="form"
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-3/6"
                >
                    <br />
                    <h1 className="block text-gray-700 font-bold mb-2 text-xl text-center">
                        About Page Image Upload
                    </h1>
                    <br />
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
                                Upload an Image for the about Page
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col w-full h-72 items-center justify-center bg-grey-lighter">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue border">
                            <span className="mt-2 text-base leading-normal">
                                Select a Column
                            </span>

                            <select
                                onChange={(value) => {
                                    setAbout({
                                        ...about,
                                        column: value,
                                    });
                                }}
                                value={about.column || ""}
                                required
                            >
                                <option value="image_first_row">
                                    image_first_row
                                </option>
                                <option value="image_second_row">
                                    image_second_row
                                </option>
                                <option value="first_banner">
                                    first_banner
                                </option>
                                <option value="second_banner">
                                    second_banner
                                </option>
                                <option value="third_banner">
                                    third_banner
                                </option>
                                <option value="fourth_banner">
                                    fourth_banner
                                </option>
                            </select>

                            <input
                                onChange={(event) => {
                                    setAbout({
                                        ...about,
                                        file: event.target.files[0],
                                    });
                                    setImageChange(true);
                                }}
                                type="file"
                                name="file"
                                className="hidden"
                            />
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

export default UploadAboutPage;
