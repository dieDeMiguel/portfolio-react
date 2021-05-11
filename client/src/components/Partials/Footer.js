function Footer() {
    return (
        <footer className="footer bg-white relative pt-1 pb-6  border-blue-700">
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-14 sm:z-50">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-gray-700 uppercase mb-2">
                                Contact
                            </span>
                            <span className="my-2">
                                <a
                                    href="/about"
                                    className="text-blue-700  text-md hover:text-blue-500"
                                >
                                    About
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="mailto:diedemiguel@gmail.com"
                                    className="text-blue-700  text-md hover:text-blue-500"
                                >
                                    E-Mail
                                </a>
                            </span>
                            <span className="my-2">
                                <a
                                    href="https://www.linkedin.com/in/diedemiguel/"
                                    className="text-blue-700  text-md hover:text-blue-500"
                                >
                                    LinkedIn
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center pt-3">
                        <p className="text-sm text-blue-700 font-bold mb-2">
                            © 2021 Diego de Miguel
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
