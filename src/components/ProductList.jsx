import { useProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const { products, loading, error } = useProducts()

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <div className="error">{error}</div>}
            {!loading && !error &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map(product => <ProductCard product={product} key={product.id} />)}
                </div>
            }
        </>
    );
}

export default ProductList;