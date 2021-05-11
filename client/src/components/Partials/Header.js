import { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function onMenuClick() {
        console.log("click");
        setShowMenu(!showMenu);
    }

    return (
        <div
            className="relative bg-white overflow-hidden sm:pb-3"
            id="not-home-banner"
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-1 bg-white sm:pb-16">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="relative pt-2 px-4 sm:px-6 lg:px-8">
                        <nav
                            className="relative flex items-center justify-between sm:h-10 lg:justify-between"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="/">
                                        <span className="sr-only">
                                            Workflow
                                        </span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="/layer-group-solid.svg"
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <button
                                            onClick={onMenuClick}
                                            id="hamburger"
                                            type="button"
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            aria-expanded="false"
                                        >
                                            <span className="sr-only">
                                                Open main menu
                                            </span>

                                            <svg
                                                onClick={onMenuClick}
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                <a
                                    href="/"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Home
                                </a>

                                <a
                                    href="/projects"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Projects
                                </a>

                                <a
                                    href="/contact"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Contact
                                </a>

                                <a
                                    href="/about"
                                    className="font-medium text-gray-500 hover:text-gray-900"
                                >
                                    About
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div
                        className={
                            showMenu
                                ? "top-0 inset-x-0 p-2 transition transform origin-top-right header-menu fixed"
                                : "absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden header-menu"
                        }
                    >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/layer-group-solid.svg"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <button
                                        onClick={onMenuClick}
                                        type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">
                                            Close main menu
                                        </span>

                                        <svg
                                            onClick={onMenuClick}
                                            className="h-6 w-6 close-header"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a
                                    href="/"
                                    className="block mt-0 mb-0 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>

                                <a
                                    href="/projects"
                                    className="block mt-0 mb-0 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    Projects
                                </a>

                                <a
                                    href="/contact"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </a>

                                <a
                                    href="/about"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
