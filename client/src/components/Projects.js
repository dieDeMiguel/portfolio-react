function Projects() {
    return (
        <>
            <div class="sm:text-center lg:text-center mt-40">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl sm:text-2xl text-center">
                    <span class="block text-indigo-600 xl:inline">
                        My projects
                    </span>
                </h1>
            </div>
            <div class="flex items-center justify-center mt-32 mb-40  0">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">
                    <div class="relative bg-white pb-5  rounded-3xl w-72 sm:w-60 2xl:w-72 my-2 shadow-xl">
                        <img
                            class="w-full h-2/4 object-cover"
                            src="{{img}}"
                            alt="{{title}}"
                        />
                        <div class="mt-8 px-5 md:px-3 lg:px-5">
                            <p class="text-xl font-semibold my-4">
                                <a href="/project/{{slug}}">{{ heading }}</a>
                            </p>
                            <div class="flex space-x-2 text-gray-400 text-sm my-3">
                                {{ date }}
                            </div>
                            <div class="flex space-x-2 text-gray-600 text-sm">
                                <p>{{ subtitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
