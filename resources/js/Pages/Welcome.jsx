// import { Head, Link } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document
//             .getElementById('screenshot-container')
//             ?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document
//             .getElementById('docs-card-content')
//             ?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="Welcome" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <img
//                     id="background"
//                     className="absolute -left-20 top-0 max-w-[877px]"
//                     src="https://laravel.com/assets/img/welcome/background.svg"
//                 />
//                 <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
//                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
//                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
//                             <div className="flex lg:col-start-2 lg:justify-center">
//                                 <svg
//                                     className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
//                                     viewBox="0 0 62 65"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </div>
//                             <nav className="-mx-3 flex flex-1 justify-end">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('dashboard')}
//                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                     >
//                                         Dashboard
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Log in
//                                         </Link>
//                                         <Link
//                                             href={route('register')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Register
//                                         </Link>
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         <main className="mt-6">
//                             <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
//                                 <a
//                                     href="https://laravel.com/docs"
//                                     id="docs-card"
//                                     className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
//                                 >
//                                     <div
//                                         id="screenshot-container"
//                                         className="relative flex w-full flex-1 items-stretch"
//                                     >
//                                         <img
//                                             src="https://laravel.com/assets/img/welcome/docs-light.svg"
//                                             alt="Laravel documentation screenshot"
//                                             className="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
//                                             onError={handleImageError}
//                                         />
//                                         <img
//                                             src="https://laravel.com/assets/img/welcome/docs-dark.svg"
//                                             alt="Laravel documentation screenshot"
//                                             className="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
//                                         />
//                                         <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
//                                     </div>

//                                     <div className="relative flex items-center gap-6 lg:items-end">
//                                         <div
//                                             id="docs-card-content"
//                                             className="flex items-start gap-6 lg:flex-col"
//                                         >
//                                             <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
//                                                 <svg
//                                                     className="size-5 sm:size-6"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                 >
//                                                     <path
//                                                         fill="#FF2D20"
//                                                         d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
//                                                     />
//                                                     <path
//                                                         fill="#FF2D20"
//                                                         d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"
//                                                     />
//                                                 </svg>
//                                             </div>

//                                             <div className="pt-3 sm:pt-5 lg:pt-0">
//                                                 <h2 className="text-xl font-semibold text-black dark:text-white">
//                                                     Documentation
//                                                 </h2>

//                                                 <p className="mt-4 text-sm/relaxed">
//                                                     Laravel has wonderful
//                                                     documentation covering every
//                                                     aspect of the framework.
//                                                     Whether you are a newcomer
//                                                     or have prior experience
//                                                     with Laravel, we recommend
//                                                     reading our documentation
//                                                     from beginning to end.
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         <svg
//                                             className="size-6 shrink-0 stroke-[#FF2D20]"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </a>

//                                 <a
//                                     href="https://laracasts.com"
//                                     className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
//                                 >
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <g fill="#FF2D20">
//                                                 <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" />
//                                             </g>
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Laracasts
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Laracasts offers thousands of video
//                                             tutorials on Laravel, PHP, and
//                                             JavaScript development. Check them
//                                             out, see for yourself, and massively
//                                             level up your development skills in
//                                             the process.
//                                         </p>
//                                     </div>

//                                     <svg
//                                         className="size-6 shrink-0 self-center stroke-[#FF2D20]"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                         />
//                                     </svg>
//                                 </a>

//                                 <a
//                                     href="https://laravel-news.com"
//                                     className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
//                                 >
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <g fill="#FF2D20">
//                                                 <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
//                                                 <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
//                                                 <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
//                                             </g>
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Laravel News
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Laravel News is a community driven
//                                             portal and newsletter aggregating
//                                             all of the latest and most important
//                                             news in the Laravel ecosystem,
//                                             including new package releases and
//                                             tutorials.
//                                         </p>
//                                     </div>

//                                     <svg
//                                         className="size-6 shrink-0 self-center stroke-[#FF2D20]"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                         />
//                                     </svg>
//                                 </a>

//                                 <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <g fill="#FF2D20">
//                                                 <path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" />
//                                             </g>
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Vibrant Ecosystem
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Laravel's robust library of
//                                             first-party tools and libraries,
//                                             such as{' '}
//                                             <a
//                                                 href="https://forge.laravel.com"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]"
//                                             >
//                                                 Forge
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://vapor.laravel.com"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Vapor
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://nova.laravel.com"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Nova
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://envoyer.io"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Envoyer
//                                             </a>
//                                             , and{' '}
//                                             <a
//                                                 href="https://herd.laravel.com"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Herd
//                                             </a>{' '}
//                                             help you take your projects to the
//                                             next level. Pair them with powerful
//                                             open source libraries like{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/billing"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Cashier
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/dusk"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Dusk
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/broadcasting"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Echo
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/horizon"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Horizon
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/sanctum"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Sanctum
//                                             </a>
//                                             ,{' '}
//                                             <a
//                                                 href="https://laravel.com/docs/telescope"
//                                                 className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
//                                             >
//                                                 Telescope
//                                             </a>
//                                             , and more.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>

//                         <footer className="py-16 text-center text-sm text-black dark:text-white/70">
//                             Laravel v{laravelVersion} (PHP v{phpVersion})
//                         </footer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }




// import { Head, Link } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document
//             .getElementById('screenshot-container')
//             ?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document
//             .getElementById('docs-card-content')
//             ?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="RepareBladi - Ensemble, améliorons notre Maroc" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <img
//                     id="background"
//                     className="absolute -left-20 top-0 max-w-[877px]"
//                     src="https://laravel.com/assets/img/welcome/background.svg"
//                 />
//                 <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-green-600 selection:text-white">
//                     <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
//                         <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
//                             <div className="flex lg:col-start-2 lg:justify-center">
//                                 {/* Logo RepareBladi - utilisation d'un placeholder - à remplacer par votre logo */}
//                                 <svg
//                                     className="h-12 w-auto text-white lg:h-16 lg:text-green-600"
//                                     viewBox="0 0 60 60"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 15C32.8 15 35 17.2 35 20C35 22.8 32.8 25 30 25C27.2 25 25 22.8 25 20C25 17.2 27.2 15 30 15ZM30 47C23.8 47 18.3 43.7 15 38.5C15.1 33.5 25 30.7 30 30.7C35 30.7 44.9 33.5 45 38.5C41.7 43.7 36.2 47 30 47Z"
//                                         fill="currentColor"
//                                     />
//                                 </svg>
//                             </div>
//                             <nav className="-mx-3 flex flex-1 justify-end">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('dashboard')}
//                                         className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-green-600 dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                     >
//                                         Tableau de bord
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-green-600 dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Connexion
//                                         </Link>
//                                         <Link
//                                             href={route('register')}
//                                             className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-green-600 dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
//                                         >
//                                             Inscription
//                                         </Link>
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         <main className="mt-6">
//                             <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
//                                 <a
//                                     href="/signaler"
//                                     id="docs-card"
//                                     className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-green-600 md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-green-600"
//                                 >
//                                     <div
//                                         id="screenshot-container"
//                                         className="relative flex w-full flex-1 items-stretch"
//                                     >
//                                         {/* Remplacer par une image de votre application */}
//                                         <img
//                                             src="/api/placeholder/800/500"
//                                             alt="Carte des signalements RepareBladi"
//                                             className="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
//                                             onError={handleImageError}
//                                         />
//                                         <img
//                                             src="/api/placeholder/800/500"
//                                             alt="Carte des signalements RepareBladi"
//                                             className="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
//                                         />
//                                         <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
//                                     </div>

//                                     <div className="relative flex items-center gap-6 lg:items-end">
//                                         <div
//                                             id="docs-card-content"
//                                             className="flex items-start gap-6 lg:flex-col"
//                                         >
//                                             <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-600/10 sm:size-16">
//                                                 <svg
//                                                     className="size-5 sm:size-6"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     fill="none"
//                                                     viewBox="0 0 24 24"
//                                                     stroke="currentColor"
//                                                     strokeWidth="2"
//                                                 >
//                                                     <path
//                                                         stroke="rgb(22 163 74)"
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                         d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                                                     />
//                                                 </svg>
//                                             </div>

//                                             <div className="pt-3 sm:pt-5 lg:pt-0">
//                                                 <h2 className="text-xl font-semibold text-black dark:text-white">
//                                                     Signaler un problème
//                                                 </h2>

//                                                 <p className="mt-4 text-sm/relaxed">
//                                                     Signalez facilement les problèmes rencontrés dans votre quartier. 
//                                                     Qu'il s'agisse d'un nid de poule, d'un dépôt sauvage de déchets, 
//                                                     ou d'un éclairage public défectueux, décrivez le problème et 
//                                                     joignez des photos pour faciliter sa résolution.
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         <svg
//                                             className="size-6 shrink-0 stroke-green-600"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             strokeWidth="1.5"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </a>

//                                 <a
//                                     href="/carte"
//                                     className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-green-600 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-green-600"
//                                 >
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-600/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                         >
//                                             <path
//                                                 stroke="rgb(22 163 74)"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
//                                             />
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Carte interactive
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Consultez notre carte interactive qui affiche tous les signalements 
//                                             dans votre ville ou quartier. Visualisez les problèmes signalés 
//                                             par d'autres citoyens et suivez leur statut de résolution en temps réel.
//                                         </p>
//                                     </div>

//                                     <svg
//                                         className="size-6 shrink-0 self-center stroke-green-600"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                         />
//                                     </svg>
//                                 </a>

//                                 <a
//                                     href="/suivi"
//                                     className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-green-600 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-green-600"
//                                 >
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-600/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                         >
//                                             <path
//                                                 stroke="rgb(22 163 74)"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
//                                             />
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Suivi des signalements
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Suivez l'état d'avancement de vos signalements. Recevez des notifications 
//                                             lorsque votre problème change de statut : en attente, pris en charge, 
//                                             en cours de résolution ou résolu. Restez informé des actions entreprises.
//                                         </p>
//                                     </div>

//                                     <svg
//                                         className="size-6 shrink-0 self-center stroke-green-600"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth="1.5"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//                                         />
//                                     </svg>
//                                 </a>

//                                 <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
//                                     <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-600/10 sm:size-16">
//                                         <svg
//                                             className="size-5 sm:size-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                         >
//                                             <path
//                                                 stroke="rgb(22 163 74)"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                                             />
//                                         </svg>
//                                     </div>

//                                     <div className="pt-3 sm:pt-5">
//                                         <h2 className="text-xl font-semibold text-black dark:text-white">
//                                             Communauté engagée
//                                         </h2>

//                                         <p className="mt-4 text-sm/relaxed">
//                                             Rejoignez une communauté de citoyens engagés pour l'amélioration de notre 
//                                             environnement local. RepareBladi vous permet de :
//                                         </p>
//                                         <ul className="mt-2 text-sm/relaxed list-disc pl-5">
//                                             <li>Voter pour les signalements prioritaires</li>
//                                             <li>Participer à des initiatives locales</li>
//                                             <li>Proposer des solutions et partager votre expertise</li>
//                                             <li>Communiquer avec les autorités et associations</li>
//                                             <li>Contribuer à un Maroc plus propre et mieux entretenu</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>

//                         <footer className="py-16 text-center text-sm text-black dark:text-white/70">
//                             RepareBladi © 2025 | Propulsé par Laravel v{laravelVersion} (PHP v{phpVersion})
//                         </footer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }


















import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="RepareBladi - Ensemble, améliorons notre Maroc" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-green-600 selection:text-white">
                    <div className="relative w-full max-w-7xl px-6">
                        {/* En-tête */}
                        <header className="flex items-center justify-between py-6">
                            <div className="flex items-center gap-4">
                                <img 
                                    src="/logo-reparebladi.png" 
                                    alt="Logo RepareBladi"
                                    className="h-16 w-auto"
                                />
                                <span className="text-2xl font-bold text-green-600">RepareBladi</span>
                            </div>
                            <nav className="flex gap-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700"
                                    >
                                        Tableau de bord
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-lg px-6 py-2 text-green-600 ring-1 ring-green-600 transition hover:bg-green-50"
                                        >
                                            Connexion
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700"
                                        >
                                            Inscription
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        {/* Section Hero */}
                        <section className="my-20 grid grid-cols-2 gap-12 py-12">
                            <div className="flex flex-col justify-center">
                                <h1 className="mb-8 text-5xl font-bold leading-tight">
                                    Transformons notre environnement ensemble !
                                </h1>
                                <p className="mb-8 text-xl text-gray-600">
                                    RepareBladi est la plateforme citoyenne qui redonne vie à nos quartiers.
                                    Signalez les problèmes, suivez les résolutions et contribuez à un Maroc plus propre.
                                </p>
                                <Link
                                    href="/signaler"
                                    className="self-start rounded-lg bg-green-600 px-8 py-3 text-lg text-white transition hover:bg-green-700"
                                >
                                    Signaler un problème →
                                </Link>
                            </div>
                            <div className="relative">
                                <img 
                                    src="/hero-illustration.png" 
                                    alt="Citoyens engagés"
                                    className="rounded-xl shadow-xl"
                                />
                            </div>
                        </section>

                        {/* Comment ça marche */}
                        <section className="my-20 py-12">
                            <h2 className="mb-16 text-center text-4xl font-bold">Comment ça marche ?</h2>
                            <div className="grid grid-cols-3 gap-8">
                                {[
                                    {title: '1. Signalez', text: 'Décrivez le problème avec photos et localisation'},
                                    {title: '2. Suivez', text: 'Recevez des updates sur la résolution'},
                                    {title: '3. Célébrez', text: 'Voyez votre impact sur la communauté'}
                                ].map((item, index) => (
                                    <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                                        <div className="mb-4 h-12 w-12 rounded-full bg-green-100 text-2xl font-bold text-green-600 flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Notre impact */}
                        <section className="my-20 bg-green-600 py-16 text-white">
                            <div className="text-center">
                                <h2 className="mb-12 text-4xl font-bold">Notre impact au Maroc</h2>
                                <div className="grid grid-cols-4 gap-8">
                                    {[
                                        {number: '15K+', label: 'Signalements traités'},
                                        {number: '120+', label: 'Villes couvertes'},
                                        {number: '95%', label: 'Satisfaction utilisateurs'},
                                        {number: '2K+', label: 'Partenaires engagés'}
                                    ].map((stat, index) => (
                                        <div key={index}>
                                            <div className="text-5xl font-bold">{stat.number}</div>
                                            <div className="text-lg">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Témoignages */}
                        <section className="my-20 py-12">
                            <h2 className="mb-16 text-center text-4xl font-bold">Ce que disent nos utilisateurs</h2>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    {
                                        text: "Grâce à RepareBladi, notre rue a été refaite en 2 semaines !",
                                        author: "Fatima E., Casablanca"
                                    },
                                    {
                                        text: "Enfin une app qui nous permet d'agir concrètement !",
                                        author: "Karim T., Marrakech"
                                    }
                                ].map((testimonial, index) => (
                                    <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
                                        <p className="mb-4 text-xl italic">"{testimonial.text}"</p>
                                        <div className="font-semibold text-green-600">{testimonial.author}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="border-t py-12">
                            <div className="grid grid-cols-4 gap-8">
                                <div>
                                    <h3 className="mb-4 text-lg font-bold">RepareBladi</h3>
                                    <p className="text-gray-600">Ensemble, améliorons notre Maroc</p>
                                </div>
                                <div>
                                    <h4 className="mb-4 font-semibold">Navigation</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-600 hover:text-green-600">Accueil</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-4 font-semibold">Légal</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-600 hover:text-green-600">CGU</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-green-600">Vie privée</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-4 font-semibold">Réseaux</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-gray-600 hover:text-green-600">Facebook</a>
                                        <a href="#" className="text-gray-600 hover:text-green-600">Twitter</a>
                                        <a href="#" className="text-gray-600 hover:text-green-600">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center text-gray-600">
                                © 2024 RepareBladi - Tous droits réservés
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}










// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { HeroSection } from "@/components/HeroSection";
// import { FeaturesSection } from "@/components/FeaturesSection";
// import { StatsSection } from "@/components/StatsSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import { CTASection } from "@/components/CTASection";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">
//         <HeroSection />
//         <FeaturesSection />
//         <StatsSection />
//         <TestimonialsSection />
//         <CTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
