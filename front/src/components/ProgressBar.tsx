export default function ProgressBar() {
  return (
    <div className="pb-16 mx-auto">
        <div className="bg-gray-200 dark:bg-gray-700 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
                <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                </div>
            </div>
            <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
                <div className="absolute right-0 -mr-2">
                    <div className="relative bg-white dark:bg-gray-800 shadow-lg px-2 py-1 rounded mt-16 -mr-12">
                        <svg className="absolute top-0 -mt-1 w-full right-0 left-0 text-white dark:text-gray-800" width="16px" height="8px" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Progress-Bars" transform="translate(-322.000000, -198.000000)" fill="currentColor">
                                    <g id="Group-4" transform="translate(310.000000, 198.000000)">
                                        <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p tabindex="0" className="focus:outline-none text-indigo-700 dark:text-indigo-400 text-xs font-bold">Step 3: Analyzing</p>
                    </div>
                </div>
                <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg" alt="check"/>
                </div>
                <div className="bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                    <div className="h-3 w-3 bg-indigo-700 rounded-full"></div>
                </div>
            </div>
            <div className="w-1/3 flex justify-end">
                <div className="bg-white dark:bg-gray-700 h-6 w-6 rounded-full shadow"></div>
            </div>
        </div>
    </div>
  );
}
