import Image from "next/image";
import darr from "@/app/components/downarrow.svg"
import pic from '@/app/components/docimg.png';
function Homemain(){
    return (
        <>
            <section className="bg-upperbg pb-10 px-10">
                <div className="max-w-3xl mx-auto">
                    <div className="flex py-6 justify-between">
                        <h2 className="text-gray-700">Start a new document</h2>

                        <div className="flex text-gray-700">

                        <p>Template Gallery</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>

                        </div>

                    </div>

                    {/* the plus img section */}
                    <div>
                        <div className="relative border-2 w-fit cursor-pointer hover:border-blue-700">
                        <Image src={pic.src} alt="picture of adding new docs" width={140} height={180} />
                        </div>
                        <p className="text-gray-700">Blank</p>
                    </div>

                <div></div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto">
                <div className="flex justify-between">
                    Recent documents
                    <div className="flex justify-between">
                        <p>Owned by anyone <img src={darr} alt="" /></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homemain;