import { ptsans } from "../layout";
import icon from "@/app/components/9apps.png";
function Navbar(){

    const iconsrc = icon.src;
    return (
        <div className="flex">
            <div className="flex items-center p-1 gap-2 ml-2">
                <div className="my-2 p-3">
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className="w-10 h-10">
                    <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="image is loading" />
                </div>
                <p className={`text-22 ${ptsans.className} text-gray-700`}>Docs</p>
            </div>

            {/* searchbar - starting */}
                <div className="py-2 ml-32" >
                    <div className="ml-4 flex items-center bg-search rounded-lg w-720">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 m-2 p-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className="my-3 bg-search mr-10 h-auto w-full" type="text" placeholder="search" />
                    </div>
                </div>

            {/* ending - searchbar */}

            <div className="flex items-center ml-60">
                <img className="h-5 w-5 -ml-1" src={iconsrc} alt="loading" />
                <img className="w-8 h-8 ml-4 rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocLCVZF1g3J8NzhQoqLlUfEHHReE3oqyyygJtBM782Cykpc=s288-c-no" alt="loading" />
            </div>

        </div>
    )
}

export default Navbar;