import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductAdd = ({onHandleSubmit}) => {
  const [inputValues, setInputValues] = useState([]);


  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(setInputValues);

  };
  const onSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(inputValues);
  }
  return (
    <div>
      <h1>Thêm mới</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name"className='form-control' onInput={onHandleChange} />
        </div>
        <div clasclassName='form-control'sName="form-group">
          <label htmlFor="">Ảnh sản phẩm </label>
          <input type="text" name="image"  className='form-control'onInput={onHandleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" className='form-control' onInput={onHandleChange} />
        </div>
        <button>Thêm</button>
      </form>
    </div>
  )
}

export default ProductAdd