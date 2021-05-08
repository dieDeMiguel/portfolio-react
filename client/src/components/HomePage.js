import Footer from "./Footer";

function HomePage() {
    return (
        <>
            <div class="relative bg-white overflow-hidden" id="main-banner">
                <div class="max-w-7xl mx-auto">
                    <div
                        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
                        id="main-banner"
                    >
                        <svg
                            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav
                                class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                aria-label="Global"
                            >
                                <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div class="flex items-center justify-between w-full md:w-auto">
                                        <a href="/">
                                            <img
                                                class="h-8 w-auto sm:h-10"
                                                src="/layer-group-solid.svg"
                                            />
                                        </a>
                                        <div class="-mr-2 flex items-center md:hidden">
                                            <button
                                                id="hamburger"
                                                type="button"
                                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                aria-expanded="false"
                                            >
                                                <span class="sr-only">
                                                    Open main menu
                                                </span>

                                                <svg
                                                    class="h-6 w-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    <a
                                        href="/"
                                        class="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="/projects"
                                        class="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Projects
                                    </a>

                                    <a
                                        href="/contact"
                                        class="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Contact
                                    </a>

                                    <a
                                        href="/about"
                                        class="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        About
                                    </a>
                                </div>
                            </nav>
                        </div>

                        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden header-menu">
                            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div class="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            class="h-8 w-auto"
                                            src="/layer-group-solid.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="-mr-2">
                                        <button
                                            type="button"
                                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <span class="sr-only">
                                                Close main menu
                                            </span>

                                            <svg
                                                class="h-6 w-6 close-header"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="px-2 pt-2 pb-3 space-y-1">
                                    <a
                                        href="/"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        Home
                                    </a>

                                    <a
                                        href="/projects"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        Projects
                                    </a>

                                    <a
                                        href="/contact"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        Contact
                                    </a>

                                    <a
                                        href="/Blog"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>

                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 main-title">
                            <div class="sm:text-center lg:text-left">
                                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block xl:inline">
                                        Diego de Miguel
                                    </span>
                                    <span class="block text-indigo-600 xl:inline">
                                        Full-Stack Software Developer
                                    </span>
                                </h1>
                                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    A comprehensive overview of my projects and
                                    interests.
                                </p>
                                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div class="rounded-md shadow">
                                        <a
                                            href="/projects"
                                            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Projects
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="./jump.jpeg"
                        alt=""
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
