import {useState, useEffect} from 'react'
import Product from './Product'

function ProductList({productData}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productData)
    }, [productData]);

    const sortedProducts = products.sort((a, b) => b.votes - a.votes);

    const handleProductUpVote = (id) => {
        console.log("product-" + id + " was clicked");
        const newProducts = products.map(product => {
            if(product.id === id){
                return {...product, votes: product.votes + 1}
                console.log(product);
            }
            else {
                return product;
            }
        })
        setProducts(newProducts);
    }

    const handleProductDownVote = (id) => {
        const newProducts = products.map(product => {
            if(product.id === id){
                return {...product, votes: product.votes - 1}
            }
            else{
                return product;
            }
        })
        setProducts(newProducts);
    }
    

    const productList = sortedProducts.map((product) => (
        <Product
        key={`product-${product.id}`} 
        product={product}  
        onVote={handleProductUpVote} 
        downVote={handleProductDownVote}
        />
    ))
    return (
        <div> 
            {productList}
        </div>
    )
}

export default ProductList
