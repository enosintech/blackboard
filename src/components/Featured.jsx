import FeaturedContent from "./FeaturedContent";
import NewArrivals from "./NewArrivals";

const Featured = () => {
  return (
    <div className='w-full h-fit px-48 py-10 flex flex-col gap-y-8'>
      <div className='w-full h-[650px] flex flex-col'>
        <NewArrivals />
      </div>
      
      <div className='w-full h-[400px] flex flex-col'>
        <FeaturedContent />
      </div>

      <div className='w-full h-[400px] flex flex-col'>
        <FeaturedContent />
      </div>

      <div className='w-full h-[400px] flex flex-col'>
        <FeaturedContent />
      </div>

      <div className='w-full h-[400px] flex flex-col'>
        <FeaturedContent />
      </div>

      <div className="w-full h-[100px] flex items-center justify-center">
        <div className="bg-black text-white px-10 py-2 hover-action">
          <p className="font-extrabold">VIEW ALL ITEMS</p>
        </div>
      </div>
    </div>
  )
}

export default Featured;
