function About({ firstBanner }) {
    return (
        <>
            <div
                class="fixed-background py-36"
                style="background-image: url();"
                id="about"
            >
                <main
                    class="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-6 main-title flex justify-start"
                    id="about-main"
                >
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                            <span class="block xl:inline text-yellow-300">
                                About me
                            </span>
                        </h1>
                        <h1 class="text-4xl tracking-tight font-extrabold text-blue-200 sm:text-5xl md:text-6xl">
                            <span
                                class="block text-blue-200 xl:inline"
                                id="about-border"
                            >
                                My Bio, Interests and more.
                            </span>
                        </h1>
                    </div>
                </main>
            </div>
            <div class="lower-about mb-20">
                <div class="first-row flex flex-col lg:flex-row justify-center items-center lg:mt-40 my-12">
                    <div class="text-first-row max-w-lg mx-2 mr-4">
                        <p>{{ firstParagraph }}</p>
                    </div>
                    <div
                        class="image-first-row xl:w-80 my-12"
                        style="background-image: url({{imageFirstRow}});"
                    ></div>
                </div>
                <div class="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-40 lg:mb-40 my-12">
                    <div
                        class="image-second-row"
                        style="background-image: url({{secondBanner}});"
                    ></div>
                    <div class="text-second-row my-12 mx-2 max-w-lg mx-2 ml-4">
                        <p>{{ secondParagraph }}</p>
                    </div>
                </div>
            </div>
            <div
                class="fixed-background py-36"
                style="background-image: url({{thirdBanner}});"
                id="about"
            >
                <main
                    class="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-2 main-title"
                    id="about-main"
                >
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span class="block xl:inline">
                                Personal Interests
                            </span>
                        </h1>
                        <p class="mt-6 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Sports and Wellness
                        </p>
                    </div>
                </main>
            </div>
            <div class="about-paragraph m-auto lg:max-w-2xl text-center my-36 mx-auto sm:mx-auto mt-20">
                <p>{{ longParagraph }}</p>
            </div>
            <div class="lower-about mb-20">
                <div class="text-first-row max-w-xl mb-4 text-2xl mx-auto text-center">
                    <p>Team Work</p>
                </div>
                <div class="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-10 ">
                    <div
                        class="image-first-row mt-4"
                        style="background-image: url({{fourthBanner}});"
                    ></div>
                    <div class="text-first-row  my-12  max-w-lg mx-2 ml-4">
                        <p>{{ fourthParagraph }}</p>
                    </div>
                </div>
                <div class="first-row flex flex-col lg:flex-row  justify-center items-center lg:mt-40 lg:mb-40">
                    <div
                        class="image-second-row"
                        style="background-image: url({{imageSecondRow}});"
                    ></div>
                    <div class="text-second-row   my-12 max-w-lg mx-2 mr-4">
                        <p>{{ thirdParagraph }}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
