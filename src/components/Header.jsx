import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartList from "./CartList";

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { cart } = useCart()
    const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Shop</h1>
            <div className="relative">
                <button onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
                    <FaShoppingCart className="text-2xl text-gray-700" />
                    {itemCount > 0 &&
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {itemCount}
                        </span>
                    }
                </button>
                {showDropdown && <CartList />}
            </div>
        </header>
    );
}

export default Header;