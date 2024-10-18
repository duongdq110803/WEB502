import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
const ProductUpdate = ({onHandleUpdate, products}) => {
  const [inputValues, setInputValues] = useState([]);
  const {id} = useParams();
  const currentProduct = products.find((item)=> item.id == id);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

  };
    const onUpdate = (e) => {
      e.preventDefault();
      onHandleUpdate({...currentProduct, ...inputValues});
    }
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      <form onSubmit={onUpdate}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} defaultValue={currentProduct?.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm </label>
          <input type="text" name="iamge" onInput={onHandleChange} defaultValue={currentProduct?.image}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" onInput={onHandleChange} defaultValue={currentProduct?.price}/>
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  )
}

export default ProductUpdate