import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";

const Carts = () => {
    // subscribing to the store using a selector
    const cart = useSelector((store) => store.cart.items)
    console.log("cart:::::", cart);

    const dispatch = useDispatch()

    const handleAddItem = () => {
        // dispatch an action
        dispatch(addItem("mouse"))
       
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <h3>Hello we have total "{cart.length}" items in our cart</h3>

            <button onClick={handleAddItem}>Click to add more item</button>
            <br />
            <button onClick={handleClearCart}>Remove all items from your cart</button>
        </>

    )
}
export default Carts;