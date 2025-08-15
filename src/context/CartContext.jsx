import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing)
                return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
            return [...prev, { ...product, qty: 1 }]
        })
    }

    const removeFromCart = (product) => {
        setCart(prev => prev.filter(item => item.id !== product.id))
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

export default CartProvider