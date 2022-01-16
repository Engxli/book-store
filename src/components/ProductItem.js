import React from 'react'

const ProductItem = ({item}) => {
    return (
        <div className="card">
            <p className="title">{item.name}</p>
            <p className="price">{item.price}</p>
            <img alt={item.name} src={item.img}></img>
        </div>
    )
}

export default ProductItem
