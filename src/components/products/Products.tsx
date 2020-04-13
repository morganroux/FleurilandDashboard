import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStylesProducts from './Products.style';

const Products: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStylesProducts();

    useEffect(() => {
        async function loadProducts() {
            const newProducts = await axios.get("http://localhost:3000/api/products");
            setProducts(newProducts.data);
            setIsLoading(false);
        }
        loadProducts();
    }, []);

    return (
        <div className = {classes.root}>
            <h1>Commandes</h1>
                {isLoading == true ? (
                    <CircularProgress />
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