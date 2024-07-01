import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { footerUsefulLinks, paymentMethods } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[35vh] bg-zinc-900 px-48 pt-5">
        <div className="flex flex-col items-center justify-center gap-y-4 h-full text-white">
          <FontAwesomeIcon icon={faInstagram} size="3x"/>
          <p className="text-xl font-medium">Like what you see? Make sure to tag us on Instagram for a chance to be featured in our stories!</p>
          <div className="border-black group hover:bg-black border-2 bg-white text-black px-10 py-2 grid place-items-center cursor-pointer">
            <p className="group-hover:text-white font-light">FOLLOW US</p>
          </div>
        </div>
      </div>
      <footer className='w-full h-[45vh] bg-black flex flex-col text-white'>
        <div className='w-full h-[90%] px-48 flex'>
          <div className='w-1/3 h-full flex flex-col'>
            <div className='w-full h-[65%] flex pt-5 pl-5'>
              <div className="flex flex-col gap-y-4">
                <p className="font-bold text-lg">PAY WITH</p>
                <div className="flex items-center gap-x-4">
                  {paymentMethods.map((method, index) => (
                    <img className="w-14 h-8 object-cover" src={method.image} key={method.id} index={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full h-[35%] overflow-hidden'>
              <p className='text-[12px] tracking-tight w-full h-full px-6 font-light flex items-center justify-center'>
                Blackboard, a top streetwear label, is dedicated to quality. Each piece is crafted with care, using the best materials and techniques. Our strict quality control ensures every garment exceeds standards. Choose Blackboard for timeless craftsmanship and style.
              </p>
            </div>
          </div>
          <div className='w-1/3 h-full flex justify-end pt-5 pr-5'>
            <div className="flex flex-col">
              <div className="p-5 w-fit h-fit bg-white">
                <p className="text-black font-anton text-3xl">BLVCKBOARD™</p>
              </div>
              <p className="text-[12px] font-light text-right mt-4 select-text">inquiries@blackboard.com</p>    
            </div>
          </div>
          <div className='w-1/3 h-full flex justify-end pt-5 pr-5'>
            <div className="flex flex-col text-right">
              <p className="font-bold text-xl">USEFUL LINKS</p>
              <div className="mt-3 flex flex-col gap-y-2">
                {footerUsefulLinks.map((link, index) => (
                  <p key={link.id} index={index} className="font-light hover:underline cursor-pointer">{link.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[10%] border-t border-white flex items-center justify-center px-48'>
          <p className='text-[12px]'> © 2015 — {new Date().getFullYear()} Blackboard™ All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;


