import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductItem from './ProductItem';

const Products: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            const newProducts = await axios.get("http://localhost:3000/api/products");
            setProducts(newProducts.data);
            setIsLoading(false);
        }
        loadProducts();
    }, [])
    return (
        <div>
            <h1>Commandes</h1>
                {isLoading == true ? (
                    <p>Chargement...</p>
                ) : (
                <ProductList>
                    {products.map((product) => {
                        return (
                        <ProductItem 
                            key = {product.id}
                            product={product}
                        />)}
                    )}
                </ProductList>
                )}
        </div>
    )
}

export default Products;