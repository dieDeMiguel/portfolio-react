import { useEffect, useState } from "react";
import axios from "axios";

function About() {
    const [aboutInfo, setAboutInfo] = useState([]);

    const fetchAboutInfo = async () => {
        const aboutInfo = await axios.get("/api/about");
        console.log("dentro de about.js", aboutInfo.data.first_banner);
        setAboutInfo(aboutInfo.data);
    };
    useEffect(() => {
        fetchAboutInfo();
    }, []);
    return (
        <>
            <div
                className="fixed-background py-36"
                style={{ backgroundImage: `url(${aboutInfo.first_banner})` }}
                id="about"
            >
                <main
                    className="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-6 main-title flex justify-start"
                    id="about-main"
                >
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                            <span className="block xl:inline text-yellow-300">
                                About me
                            </span>
                        </h1>
                        <h1 className="text-4xl tracking-tight font-extrabold text-blue-200 sm:text-5xl md:text-6xl">
                            <span
                                className="block text-blue-200 xl:inline"
                                id="about-border"
                            >
                                My Bio, Interests and more.
                            </span>
                        </h1>
                    </div>
                </main>
            </div>
            <div className="lower-about mb-20">
                <div className="first-row flex flex-col lg:flex-row justify-center items-center lg:mt-40 my-12">
                    <div className="text-first-row max-w-lg mx-2 mr-4">
                        <p>{aboutInfo.first_paragraph}</p>
                    </div>
                    <div
                        className="image-first-row my-12"
                        style={{
                            backgroundImage: `url(${aboutInfo.image_first_row})`,
                        }}
                    ></div>
                </div>
                <div className="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-40 lg:mb-40 my-12">
                    <div
                        className="image-second-row"
                        style={{
                            backgroundImage: `url(${aboutInfo.second_banner})`,
                        }}
                    ></div>
                    <div className="text-second-row my-12 mx-2 max-w-lg mx-2 ml-4">
                        <p>{aboutInfo.second_paragraph}</p>
                    </div>
                </div>
            </div>
            <div
                className="fixed-background py-36"
                style={{ backgroundImage: `url(${aboutInfo.third_banner})` }}
                id="about"
            >
                <main
                    className="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-2 main-title"
                    id="about-main"
                >
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">
                                Personal Interests
                            </span>
                        </h1>
                        <p className="mt-6 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Sports and Wellness
                        </p>
                    </div>
                </main>
            </div>
            <div className="about-paragraph m-auto lg:max-w-2xl text-center my-36 mx-auto sm:mx-auto mt-20">
                {/* <p>{aboutInfo.long_paragraph}</p> */}
            </div>
            <div className="lower-about mb-20">
                <div className="text-first-row max-w-xl mb-4 text-2xl mx-auto text-center">
                    <p>Team Work</p>
                </div>
                <div className="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-10 ">
                    <div
                        className="image-first-row mt-4"
                        style={{
                            backgroundImage: `url(${aboutInfo.fourth_banner})`,
                        }}
                    ></div>
                    <div className="text-first-row  my-12  max-w-lg mx-2 ml-4">
                        <p>{aboutInfo.fourth_paragraph}</p>
                    </div>
                </div>
                <div className="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-40 lg:mb-40">
                    <div
                        className="image-second-row"
                        style={{
                            backgroundImage: `url(${aboutInfo.image_second_row})`,
                        }}
                    ></div>
                    <div className="text-second-row   my-12 max-w-lg mx-2 mr-4">
                        <p>{aboutInfo.third_paragraph}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
