import { arrowIcon, hoodieBackImg, hoodieFrontImg, joggerImg, socksDoubleImg, socksSingleImg, tshirtBackImg, tshirtFrontImg } from "../lib";
import Heart from "./Heart";
import ItemDetail from "./ItemDetail";

const NewArrivals = () => {
  return (
    <>
        <div className='w-full h-[5%] flex items-center justify-between text-[1.5vw]'>
            <p className="font-black">NEW ARRIVALS</p>
            <p className="font-extralight">JULY 2024 COLLECTION</p>
        </div>
        <div className='w-full h-[95%] border border-gray-200 flex'>
            <div className='w-1/2 h-full border-r border-gray-100 relative flex justify-center pt-5'>
                <ItemDetail detail={"SELLING FAST"}/>
                <Heart />
                <div className="w-[60%] h-[80%] relative hover:scale-[1.1] transition-all duration-500 group">
                    <img src={hoodieFrontImg} alt="clothing item" className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-500 cursor-pointer" />
                    <img src={hoodieBackImg} className="w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer" />
                </div>
                <div className="absolute bottom-4 left-4 flex flex-col">
                    <p className="text-[22px] font-black cursor-pointer hover:underline">DAILY HOODIE UNISEX</p>
                    <p className="text-[18px] font-light">ZMW 400</p>
                </div>
            </div>
            <div className='w-1/2 h-full grid grid-cols-2 grid-rows-2'>
                <div className='border-b border-r border-gray-100 relative flex justify-center pt-5'>
                    <Heart />
                    <div className="w-[60%] h-[75%] relative hover:scale-[1.05] transition-all duration-500 group">
                        <img src={tshirtFrontImg} className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-500 cursor-pointer" />
                        <img src={tshirtBackImg} className="w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer" />
                    </div>
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">BLACKBOARD CREW NECK T-SHIRT</p>
                        <p className="text-[12px] font-light">ZMW 300</p>
                        <div className="border-black rounded-full">
                            <p className="font-extrabold text-[10px]">SELLING FAST</p>    
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-100 relative flex justify-center pt-5'>
                    <Heart />
                    <div className="w-[60%] h-[75%] relative hover:scale-[1.05] transition-all duration-500 group">
                        <img src={joggerImg} alt="clothing item" className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-500 cursor-pointer" />
                        <img src={joggerImg} alt="clothing item" className="w-full h-full rotate-180 absolute top-0 left-0 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer" />
                    </div>
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">UNISEX JOGGERS</p>
                        <p className="text-[12px] font-light">ZMW 250</p>
                        <div className="border-black rounded-full opacity-0">
                            <p className="font-extrabold text-[10px]">SELLING FAST</p>    
                        </div>
                    </div>
                </div>
                <div className='border-r border-gray-100 relative flex justify-center pt-5'>
                    <Heart />
                    <div className="w-[60%] h-[75%] relative hover:scale-[1.05] transition-all duration-500 group">
                        <img src={socksDoubleImg} alt="clothing item" className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-500 cursor-pointer" />
                        <img src={socksSingleImg} alt="clothing item" className="w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer" />
                    </div>
                    <div className="absolute bottom-2 left-3 flex flex-col">
                        <p className="text-[14px] font-black cursor-pointer hover:underline">TIGHT KNIT STOCKINGS</p>
                        <p className="text-[12px] font-light">ZMW 150</p>
                        <div className="border-black rounded-full">
                            <p className="font-extrabold text-[10px]">SELLING FAST</p>    
                        </div>
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
