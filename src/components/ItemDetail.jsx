const ItemDetail = (props) => {
  return (
    <div className="absolute top-2 left-2 border-4 border-black rounded-full p-[1.5%]">
        <p className="font-extrabold text-[100%]">{props.detail}</p>    
    </div>
  )
}

export default ItemDetail;
