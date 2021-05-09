function Project() {
    return (
        <>
            <script
                src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
                defer=""
            ></script>
            <section class="px-5">
                <div class="container py-16 mx-auto rounded-xl">
                    <div class="shadow rounded-xl" x-data="{ tab: 'preview2' }">
                        <div class=" rounded-b-xl" x-show="tab === 'preview2'">
                            <section class="text-gray-700 body-font">
                                <div class="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
                                    <div class="flex flex-col w-full pt-0 sm:mb-6 text-left lg:flex-grow md:w-1/2 xl:mr-6 md:pr-2 md:items-start md:mb-0 xl:max-h-96">
                                        <h2 class="mb-1 text-xs font-medium tracking-widest text-blue-500black title-font">
                                            subtitle
                                        </h2>
                                        <h1 class="mb-2 text-5xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                                            heading
                                        </h1>
                                        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                                            <div class="flex flex-col items-start p-4 text-left md:w-11/12 md:mb-0">
                                                <div class="flex-grow">
                                                    <h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                                                        date
                                                    </h2>
                                                    <p class="text-base leading-relaxed">
                                                        info
                                                    </p>
                                                    <div class="links flex flex-col">
                                                        {/* #if URL */}
                                                        <p class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                            <a
                                                                target="_blank"
                                                                class="font-semibold text-blue-700 hover:text-blue-400"
                                                                href="URL"
                                                            >
                                                                Go to project
                                                            </a>
                                                        </p>
                                                        {/* #if gitRepository */}
                                                        <p class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                            <a
                                                                target="_blank"
                                                                class="font-semibold text-blue-700 hover:text-blue-400"
                                                                href="gitRepository"
                                                            >
                                                                Go to git
                                                                repository
                                                            </a>
                                                        </p>
                                                        {/* /if
                                                        else */}
                                                        <p class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                            <a
                                                                target="_blank"
                                                                class="font-semibold text-blue-700 hover:text-blue-400"
                                                                href="/directory"
                                                            >
                                                                Go to project
                                                            </a>
                                                        </p>
                                                        {/* #if gitRepository */}
                                                        <p class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 lg:mt-5">
                                                            <a
                                                                target="_blank"
                                                                class="font-semibold text-blue-700 hover:text-blue-400"
                                                                href="gitRepository"
                                                            >
                                                                Go to git
                                                                repository
                                                            </a>
                                                        </p>
                                                        {/* /if */}
                                                        {/* /if */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full lg:w-5/6 lg:max-w-2xl md:w-1/2 md:mt-0 shadow-xl">
                                        <img
                                            class="object-cover object-center rounded-lg"
                                            alt="hero"
                                            src="img"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class=" rounded-b-2xl" x-show="tab === 'code2'" style="display: none;">
                            <div class="h-screen overflow-auto overflow-y-scroll bg-blueGray-900 text-blueGray-200 rounded-b-xl code-tab">
                                <div class="rounded-b-xl">
                                    <div class="hidden" id="headerTwo">
                                        <section class="text-gray-700 body-font">
                                            <div class="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row lg:px-28">
                                                <div
                                                    class="flex flex-col w-full pt-0 lg:mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
                                                    <h2 class="mb-1 text-xs font-medium tracking-widest text-blue-500black title-font">subtitle}}</h2>
                                                    <h1 class="text-5xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                                                        heading}}
                                                    </h1>
                                                    <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                                                        <div class="flex flex-col items-start p-4 md:mb-6 text-left md:w-11/12 md:mb-0"> 
                                                            <div class="flex-grow">
                                                                <h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                                                                    date}}
                                                                </h2>
                                                                <p class="text-base leading-relaxed">info}}
                                                                </p>
                                                                <a href="/directory}}"
                                                                    class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 sm:mt-4 lg:mt-30 ">
                                                                    Go to project
                                                                    <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                        width="20" height="20" fill="currentColor">
                                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                                        <path
                                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 mt-6 md:mt-0 shadow-xl">
                                                    <img class="object-cover object-center rounded-lg " alt="hero"
                                                        src="img}}" />
                                                </div>
                                            </div>
                                        </section>      
                                        <style>pre code.rainbow.rb1 .line:before{ width: 17px; }pre code.rainbow.rb1 .line:after{ width:0px }</style><pre class="leading-6 rainbow-show" data-trimmed="true"><code data-language="html" class="rainbow rainbow-show rb1"><span id="rb1ln1" class="line" data-line="1"></span>
                                        <span id="rb1ln2" class="line" data-line="2"></span>        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">section</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">text-gray-700 body-font</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln3" class="line" data-line="3"></span>            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln4" class="line" data-line="4"></span>                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span>
                                        <span id="rb1ln5" class="line" data-line="5"></span>                    <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 </span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln6" class="line" data-line="6"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">h2</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">mb-1 text-xs font-medium tracking-widest text-blue-500black title-font</span><span class="string quote">"</span><span class="support tag close">&gt;</span>Your tagline<span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">h2</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln7" class="line" data-line="7"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">h1</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln8" class="line" data-line="8"></span>                        Medium length display headline to convert.
                                        <span id="rb1ln9" class="line" data-line="9"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">h1</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln10" class="line" data-line="10"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 </span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln11" class="line" data-line="11"></span>                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln12" class="line" data-line="12"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span>
                                        <span id="rb1ln13" class="line" data-line="13"></span>                                <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-black bg-gray-200 rounded-full</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln14" class="line" data-line="14"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">svg</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">w-6 h-6</span><span class="string quote">"</span> <span class="support attribute">xmlns</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">http://www.w3.org/2000/svg</span><span class="string quote">"</span> <span class="support attribute">viewBox</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">0 0 24 24</span><span class="string quote">"</span> <span class="support attribute">width</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">18</span><span class="string quote">"</span>
                                        <span id="rb1ln15" class="line" data-line="15"></span>                                    <span class="support attribute">height</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">18</span><span class="string quote">"</span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">currentColor</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln16" class="line" data-line="16"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">none</span><span class="string quote">"</span> <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M0 0h24v24H0z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln17" class="line" data-line="17"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span>
                                        <span id="rb1ln18" class="line" data-line="18"></span>                                        <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8                           5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln19" class="line" data-line="19"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">svg</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln20" class="line" data-line="20"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln21" class="line" data-line="21"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex-grow</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln22" class="line" data-line="22"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">h2</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln23" class="line" data-line="23"></span>                                    Information 1
                                        <span id="rb1ln24" class="line" data-line="24"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">h2</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln25" class="line" data-line="25"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">p</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">text-base leading-relaxed</span><span class="string quote">"</span><span class="support tag close">&gt;</span>Explain 2 great feature here. Information about the
                                        <span id="rb1ln26" class="line" data-line="26"></span>                                    feature.
                                        <span id="rb1ln27" class="line" data-line="27"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">p</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln28" class="line" data-line="28"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">a</span></span> <span class="support attribute">href</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">#</span><span class="string quote">"</span>
                                        <span id="rb1ln29" class="line" data-line="29"></span>                                    <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 </span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln30" class="line" data-line="30"></span>                                    Learn More
                                        <span id="rb1ln31" class="line" data-line="31"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">svg</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">w-4 h-4 ml-2</span><span class="string quote">"</span> <span class="support attribute">xmlns</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">http://www.w3.org/2000/svg</span><span class="string quote">"</span> <span class="support attribute">viewBox</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">0 0 24 24</span><span class="string quote">"</span>
                                        <span id="rb1ln32" class="line" data-line="32"></span>                                        <span class="support attribute">width</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">20</span><span class="string quote">"</span> <span class="support attribute">height</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">20</span><span class="string quote">"</span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">currentColor</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln33" class="line" data-line="33"></span>                                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">none</span><span class="string quote">"</span> <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M0 0h24v24H0z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln34" class="line" data-line="34"></span>                                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span>
                                        <span id="rb1ln35" class="line" data-line="35"></span>                                            <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln36" class="line" data-line="36"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">svg</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln37" class="line" data-line="37"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">a</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln38" class="line" data-line="38"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln39" class="line" data-line="39"></span>                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln40" class="line" data-line="40"></span>                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln41" class="line" data-line="41"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span>
                                        <span id="rb1ln42" class="line" data-line="42"></span>                                <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-black bg-gray-200 rounded-full</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln43" class="line" data-line="43"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">svg</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">w-6 h-6</span><span class="string quote">"</span> <span class="support attribute">xmlns</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">http://www.w3.org/2000/svg</span><span class="string quote">"</span> <span class="support attribute">viewBox</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">0 0 24 24</span><span class="string quote">"</span> <span class="support attribute">width</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">18</span><span class="string quote">"</span>
                                        <span id="rb1ln44" class="line" data-line="44"></span>                                    <span class="support attribute">height</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">18</span><span class="string quote">"</span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">currentColor</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln45" class="line" data-line="45"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">none</span><span class="string quote">"</span> <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M0 0h24v24H0z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln46" class="line" data-line="46"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span>
                                        <span id="rb1ln47" class="line" data-line="47"></span>                                        <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM11 13H4v6h7v-6zm9 0h-7v6h7v-6zm-9-8H4v6h7V5zm9 0h-7v6h7V5z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln48" class="line" data-line="48"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">svg</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln49" class="line" data-line="49"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln50" class="line" data-line="50"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">flex-grow</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln51" class="line" data-line="51"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">h2</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln52" class="line" data-line="52"></span>                                    Information 1<span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">h2</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln53" class="line" data-line="53"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">p</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">text-base leading-relaxed</span><span class="string quote">"</span><span class="support tag close">&gt;</span>Explain 2 great feature here. Information about the
                                        <span id="rb1ln54" class="line" data-line="54"></span>                                    feature.<span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">p</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln55" class="line" data-line="55"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">a</span></span> <span class="support attribute">href</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">#</span><span class="string quote">"</span>
                                        <span id="rb1ln56" class="line" data-line="56"></span>                                    <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 </span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln57" class="line" data-line="57"></span>                                    Learn More
                                        <span id="rb1ln58" class="line" data-line="58"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">svg</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">w-4 h-4 ml-2</span><span class="string quote">"</span> <span class="support attribute">xmlns</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">http://www.w3.org/2000/svg</span><span class="string quote">"</span> <span class="support attribute">viewBox</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">0 0 24 24</span><span class="string quote">"</span>
                                        <span id="rb1ln59" class="line" data-line="59"></span>                                        <span class="support attribute">width</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">20</span><span class="string quote">"</span> <span class="support attribute">height</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">20</span><span class="string quote">"</span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">currentColor</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln60" class="line" data-line="60"></span>                                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span> <span class="support attribute">fill</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">none</span><span class="string quote">"</span> <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M0 0h24v24H0z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln61" class="line" data-line="61"></span>                                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">path</span></span>
                                        <span id="rb1ln62" class="line" data-line="62"></span>                                            <span class="support attribute">d</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z</span><span class="string quote">"</span> <span class="support tag close">/&gt;</span>
                                        <span id="rb1ln63" class="line" data-line="63"></span>                                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">svg</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln64" class="line" data-line="64"></span>                                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">a</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln65" class="line" data-line="65"></span>                            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln66" class="line" data-line="66"></span>                        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln67" class="line" data-line="67"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln68" class="line" data-line="68"></span>                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln69" class="line" data-line="69"></span>                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">div</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">w-full lg:w-5/6 lg:max-w-lg md:w-1/2</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln70" class="line" data-line="70"></span>                    <span class="support tag"><span class="support tag">&lt;</span><span class="support tag-name">img</span></span> <span class="support attribute">class</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">object-cover object-center rounded-lg </span><span class="string quote">"</span> <span class="support attribute">alt</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">hero</span><span class="string quote">"</span>
                                        <span id="rb1ln71" class="line" data-line="71"></span>                        <span class="support attribute">src</span><span class="support operator">=</span><span class="string quote">"</span><span class="string value">https://dummyimage.com/720x600/F3F4F7/8693ac</span><span class="string quote">"</span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln72" class="line" data-line="72"></span>                <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln73" class="line" data-line="73"></span>            <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">div</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln74" class="line" data-line="74"></span>        <span class="support tag"><span class="support tag">&lt;</span><span class="support tag special">/</span><span class="support tag-name">section</span></span><span class="support tag close">&gt;</span>
                                        <span id="rb1ln75" class="line" data-line="75"></span>                  </code><div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="sm:text-center lg:text-center" style="margin-top: 4%;">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block text-indigo-200 xl:inline text-center">More projects</span>
                </h1>
                <div class="flex items-center justify-center mb-14" style="margin-top: 5rem;"> 
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-cols-4">      
                        {/* #projectList */}
                            <div class="relative bg-white pb-5  rounded-3xl w-72 sm:w-60 2xl:w-72 my-2 shadow-xl">
                                <img class="w-full h-2/4 object-cover" src="img" alt="title" />
                                <div class="mt-8 px-5 md:px-3 lg:px-5"> 
                                    <p class="text-xl font-semibold my-4"><a href="/project/slug}}">"heading"</a></p>
                                    <div class="flex space-x-2 text-gray-400 text-sm my-3">
                                        "date"
                                    </div>
                                    <div class="flex space-x-2 text-gray-600 text-sm" >
                                        <p >"subtitle"</p> 
                                    </div>   
                                </div>  
                            </div> 
                        {/* /projectList */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
