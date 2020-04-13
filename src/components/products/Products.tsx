import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import useStylesProducts from './Products.style';

type ProductsProps = {
    products:any
}

const ProductsFade: React.FC<ProductsProps> = (props) => {

    return (
        <div {...props} >
            <ProductList>
                {props.products.map((product) => {
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

const ProductsPage: React.FC = () => {
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
            {isLoading == true && <CircularProgress />}
            <Fade in={!isLoading} timeout={500}>
                <ProductsFade products={products}/>
            </Fade>
        </div>
    )
}
export default ProductsPage;