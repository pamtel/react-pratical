import React from 'react'
import Product from './Product'
import ProductList from './ProductList'
import {productData} from './productData'

function ProductHuntApp() {
    return (
        <div>
            <h1 className="text-center m-5">Popular Products</h1>
            <ProductList productData={productData} />
        </div>
    )
}

export default ProductHuntApp