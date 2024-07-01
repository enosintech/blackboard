import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as defaultHeart } from "@fortawesome/free-regular-svg-icons";

const Heart = () => {
    const [ liked, setLiked ] = useState(false);

  return (
    <button onClick={() => {
        liked ? setLiked(false) : setLiked(true)     
    }} className='rounded-full w-10 h-10 hover-action bg-gray-100 flex items-center justify-center absolute top-2 right-3'>
      <FontAwesomeIcon className="transition-all duration-500" icon={liked ? faHeart : defaultHeart} size="lg" color={liked ? "red" : "black"} />
    </button>
  )
}

export default Heart;
