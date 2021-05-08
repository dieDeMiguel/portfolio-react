import Footer from "./Footer";

function Contact() {
    return (
        <>
            <div class="fixed-background flex flex-col justify-center">
                <main
                    class="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-2 main-title max-w-lg"
                    id="contact-main"
                >
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span class="block xl:inline">
                                Let's talk about business
                            </span>
                        </h1>
                        <div class="mt-3 mb-4 sm:mt-2 sm:flex sm:justify-center lg:justify-start"></div>
                        <p class="mb-4 text-lg">
                            I am open to full-time positions in Germany, don't
                            be afraid to reach out.
                        </p>

                        <p class="mt-2 text-lg text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                            <span class="font-bold">Email:</span>{" "}
                            <a
                                href="mailto:diedemiguel@gmail.com"
                                class="text-blue-700  text-md hover:text-blue-500"
                            >
                                diedemiguel@gmail.com
                            </a>
                        </p>
                        <p class="mt-2 text-lg text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                            <span class="font-bold">gitHub:</span>{" "}
                            <a
                                href="https://github.com/dieDeMiguel"
                                class="text-blue-700  text-md hover:text-blue-500"
                            >
                                github.com/dieDeMiguel
                            </a>
                        </p>
                        <div class="mt-6 mb-4 sm:mt-2 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <a
                                    href="/cv-english.pdf"
                                    target="_blank"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
