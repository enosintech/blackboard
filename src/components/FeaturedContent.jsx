import { arrowIcon } from "../lib";

const FeaturedContent = () => {
  return (
    <>
        <div className="w-full h-[7%] flex items-center">
            <p className="font-black">FEATURED ACCESSORIES</p>
        </div>
        <div className="w-full h-[93%] border border-gray-100 flex">
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <img className="w-[60%] h-[70%] object-cover bg-red-500 cursor-pointer" />
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline">TIGHT KNIT STOCKINGS</p>
                    <p className="text-[12px] font-light">ZMW 150</p>
                </div>
            </div> 
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <img className="w-[60%] h-[70%] object-cover bg-red-500 cursor-pointer" />
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline">TIGHT KNIT STOCKINGS</p>
                    <p className="text-[12px] font-light">ZMW 150</p>
                </div>
            </div>
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <img className="w-[60%] h-[70%] object-cover bg-red-500 cursor-pointer" />
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline">TIGHT KNIT STOCKINGS</p>
                    <p className="text-[12px] font-light">ZMW 150</p>
                </div>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center justify-center cursor-pointer">
                <p className="font-black text-[18px] text-center">SHOP ALL ACCESSORIES</p>
                <img src={arrowIcon} className="size-8 mt-1"/>
            </div>
        </div>
    </>
  )
}

export default FeaturedContent;
