import { useCart } from "../context/CartContext";

const CartList = () => {
    const { cart, removeFromCart, clearCart } = useCart()
    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0)
    return (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50 p-4">
            <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your Cart is Empty</p>
            ) : (
                <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center py-2">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.qty} × ${item.price}</p>
                                </div>
                                <button onClick={() => removeFromCart(item)}
                                    className="text-sm text-red-500 hover:underline cursor-pointer">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>
                    <button onClick={clearCart}
                        className="mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600 cursor-pointer">
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
}

export default CartList;