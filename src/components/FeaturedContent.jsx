import Heart from "./Heart";

import { arrowIcon } from "../lib";

const FeaturedContent = (props) => {

    const featured = props?.featured;

  return (
    <>
        <div className="w-full h-[7%] flex items-center">
            <p className="font-black">{featured && featured[0].type === "hoodie" ? "FEATURED HOODIES" : featured && featured[0].type === "tee" ? "FEATURED T-SHIRTS" : featured && featured[0].type === "accessory" ? "FEATURED ACCESSORIES" : featured && featured[0].type === 'bottom' ? "FEATURED BOTTOMS" : "FEATURED"}</p>
        </div>
        <div className="w-full h-[93%] border border-gray-200 flex">
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <Heart />
                <div className="w-[60%] h-[70%] relative hover:scale-[1.1] transition-all duration-700 group">
                    <img alt="clothing item" src={featured && featured[0].image} className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-700 cursor-pointer" />
                    <img alt="clothing item" src={featured && featured[0].hoverImage} className={`w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 cursor-pointer ${featured && featured[1].type === "bottom" ? "rotate-180" : "rotate-0"}`} />
                </div>
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline uppercase">{featured && featured[0].name}</p>
                    <p className="text-[12px] font-light uppercase">{featured && featured[0].price}</p>
                    <div className="border-black rounded-full">
                        <p className={`font-extrabold text-[10px] ${featured && featured[0].type === "bottom" ? "opacity-0" : "opacity-100"}`}>SELLING FAST</p>    
                    </div>
                </div>
            </div> 
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <Heart />
                <div className="w-[60%] h-[70%] relative hover:scale-[1.1] transition-all duration-700 group">
                    <img alt="clothing item" src={featured && featured[1].image} className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-700 cursor-pointer" />
                    <img alt="clothing item" src={featured && featured[1].hoverImage} className={`w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 cursor-pointer ${featured && featured[1].type === "bottom" ? "rotate-180" : "rotate-0"}`} />
                </div>
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline uppercase">{featured && featured[0].name}</p>
                    <p className="text-[12px] font-light uppercase">{featured && featured[0].price}</p>
                    <div className="border-black rounded-full">
                        <p className={`font-extrabold text-[10px] ${featured && featured[0].type === "bottom" ? "opacity-0" : "opacity-100"}`}>SELLING FAST</p>    
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-full border-r border-gray-200 relative flex justify-center pt-5">
                <Heart />
                <div className="w-[60%] h-[70%] relative hover:scale-[1.1] transition-all duration-700 group">
                    <img alt="clothing item" src={featured && featured[2].image} className="w-full h-full absolute top-0 left-0 object-contain group-hover:opacity-0 transition-all duration-700 cursor-pointer" />
                    <img alt="clothing item" src={featured && featured[2].hoverImage} className={`w-full h-full absolute top-0 left-0 object-contain opacity-0 transition-all duration-700 group-hover:opacity-100 cursor-pointer ${featured && featured[1].type === "bottom" ? "rotate-180" : "rotate-0"}`} />
                </div>
                <div className="absolute bottom-2 left-3 flex flex-col">
                    <p className="text-[14px] font-black cursor-pointer hover:underline uppercase">{featured && featured[0].name}</p>
                    <p className="text-[12px] font-light uppercase">{featured && featured[0].price}</p>
                    <div className="border-black rounded-full">
                        <p className={`font-extrabold text-[10px] ${featured && featured[0].type === "bottom" ? "opacity-0" : "opacity-100"}`}>SELLING FAST</p>    
                    </div>
                </div>
            </div>
            <div className="w-1/4 h-full flex flex-col items-center justify-center cursor-pointer">
                <p className="font-black text-[18px] text-center uppercase">{featured && featured[0].type === "hoodie" ? "SHOP ALL HOODIES" : featured && featured[0].type === "tee" ? "SHOP ALL T-SHIRTS" : featured && featured[0].type === "accessory" ? "SHOP ALL ACCESSORIES" : featured && featured[0].type === 'bottom' ? "SHOP ALL BOTTOMS" : "SHOP ALL"}</p>
                <img src={arrowIcon} className="size-8 mt-1"/>
            </div>
        </div>
    </>
  )
}

export default FeaturedContent;
