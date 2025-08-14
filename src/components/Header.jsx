import { useCart } from "../context/CartContext";

const Header = () => {
    const {cart} = useCart()
    const itemCount = cart.reduce((acc, item)=>acc+item.qty, 0)
    return ( 

    );
}
 
export default Header;