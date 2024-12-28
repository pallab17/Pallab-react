import { useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { useDispatch } from "react-redux";
import { clearCart } from "../common/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatches an action to clear the cart
    // Dispatches an action to clear the cart
    dispatch(clearCart());
  };

  return (
    <div className=" text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white  p-2 m-2 rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cardItems.length === 0 && (
            <h1>No items in the cart.Keep Ordering!</h1>
        )}
        <Itemlist items={cardItems} />
      </div>
    </div>
  );
};

export default Cart;
