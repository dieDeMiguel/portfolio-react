function Contact() {
    return (
        <>
            <div className="fixed-background flex flex-col justify-center">
                <main
                    className="mt-1 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-2 main-title max-w-lg"
                    id="contact-main"
                >
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">
                                Let's talk about business
                            </span>
                        </h1>
                        <div className="mt-3 mb-4 sm:mt-2 sm:flex sm:justify-center lg:justify-start"></div>
                        <p className="mb-4 text-lg">
                            I am open to full-time positions in Germany, don't
                            be afraid to reach out.
                        </p>

                        <p className="mt-2 text-lg text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                            <span className="font-bold">Email:</span>{" "}
                            <a
                                href="mailto:diedemiguel@gmail.com"
                                className="text-blue-700  text-md hover:text-blue-500"
                            >
                                diedemiguel@gmail.com
                            </a>
                        </p>
                        <p className="mt-2 text-lg text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                            <span className="font-bold">gitHub:</span>{" "}
                            <a
                                href="https://github.com/dieDeMiguel"
                                className="text-blue-700  text-md hover:text-blue-500"
                            >
                                github.com/dieDeMiguel
                            </a>
                        </p>
                        <div className="mt-6 mb-4 sm:mt-2 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a
                                    href="/cv-english.pdf"
                                    target="_blank"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contact;
