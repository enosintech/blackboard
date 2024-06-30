import { arrowIcon } from "../lib";

const NewArrivals = () => {
  return (
    <>
        <div className='w-full h-[5%] flex items-center justify-between text-2xl'>
            <p className="font-black">NEW ARRIVALS</p>
            <p className="font-extralight">JULY 2024 COLLECTION</p>
        </div>
        <div className='w-full h-[95%] border border-gray-100 flex'>
            <div className='w-1/2 h-full border-r border-gray-100 relative flex justify-center pt-5'>
                <img className="w-[60%] h-[80%] object-cover bg-yellow-500 cursor-pointer" />
                <div className="absolute bottom-4 left-4 flex flex-col">
                    <p className="text-[22px] font-black cursor-pointer hover:underline">DAILY HOODIE UNISEX</p>
                    <p className="text-[18px] font-light">ZMW 400</p>
                </div>
            </div>
            <div className='w-1/2 h-full grid grid-cols-2 grid-rows-2'>
                <div className='border-b border-r border-gray-100 relative flex justify-center pt-5'>
                    <img className="w-[60%] h-[75%] object-cover bg-yellow-500 cursor-pointer" />
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">DAILY HOODIE UNISEX</p>
                        <p className="text-[12px] font-light">ZMW 400</p>
                    </div>
                </div>
                <div className='border-b border-gray-100 relative flex justify-center pt-5'>
                    <img className="w-[60%] h-[75%] object-cover bg-yellow-500 cursor-pointer" />
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">DAILY HOODIE UNISEX</p>
                        <p className="text-[12px] font-light">ZMW 400</p>
                    </div>
                </div>
                <div className='border-r border-gray-100 relative flex justify-center pt-5'>
                    <img className="w-[60%] h-[75%] object-cover bg-yellow-500 cursor-pointer" />
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">DAILY HOODIE UNISEX</p>
                        <p className="text-[12px] font-light">ZMW 400</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <p className="font-black text-[18px] text-center max-w-[65%]">SHOP ALL NEW</p>
                    <img src={arrowIcon} className="size-8 mt-1"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewArrivals;
