import { CDN_URL } from "../common/constants";

const Itemlist = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" m-2 p-2 border-gray-300 border-b-2 text-left"
        >
        <div>
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
          <div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
