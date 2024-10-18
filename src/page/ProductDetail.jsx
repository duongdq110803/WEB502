import React from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail = (props) => {
  const { id } = useParams();
  const currentProduct = props.products.find((item)=> item.id == id);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div>
        <h2>{currentProduct.name}</h2>
        <img src={currentProduct.image} alt="" />
        <p>{currentProduct.price}</p>
      </div>
    </div>
  )
}

export default ProductDetail