import { useDispatch } from "react-redux";
import { CDN_URL } from "../common/constants";
import { addItem } from "../common/cartSlice";

const Itemlist = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action -- adding item wala action
    dispatch(addItem(item));

  }

  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
        <div className=" w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span>
             -  ₹
              {item.card.info.defaultPrice/100 ||
                item.card.info.finalPrice/100 ||
                item.card.info.price/100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 p-4 ">
          <div className="absolute">
            <button className="bg-black text-white shadow-lg rounded-lg p-1 mx-20 "
            // onClick={handleAddItem}
            // onClick={handleAddItem(item)}
            onClick={() => handleAddItem(item)}
             >
              Add +
            </button>
          </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
