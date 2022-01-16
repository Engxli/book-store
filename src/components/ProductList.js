import React from 'react'
import products from '../products'
import ProductItem from './ProductItem'

 const  ProductList = () => {
    return (
        <div className="card-container">

            {products.map(product => <ProductItem item={product} key={product.id}/>)}
        </div>
    )
}


export default ProductList;


