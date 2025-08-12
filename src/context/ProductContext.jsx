import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products')
                if (!res.ok)
                    throw new Error('fetch products failed')
                const data = await res.json()
                setProducts(data)
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProducts = () => {
    return useContext(ProductContext)
}

export default ProductProvider;