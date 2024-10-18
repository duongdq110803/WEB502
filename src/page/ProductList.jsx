import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
  const {products, onHandleRemove} = props
  return (
    <div>
      <h1>Danh sach san pham</h1>
      <Link to={"/admin/products/add"}>
        <button className='btn btn-info'>Thêm sản phẩm </button>
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Ten san pham</th>
            <th>Anh san pham</th>
            <th>Gia san pham</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product)=>{
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.image}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className='btn btn-danger'onClick={()=> onHandleRemove(product.id)}>Xoa</button>
                    <Link to={`/admin/products/${product.id}`}>
                      <button className='btn btn-info'>Chi tiết sản phẩm </button>
                    </Link>
                    <Link to={`/admin/products/${product.id}/update`}>
                      <button className='btn btn-info'>Cập nhật</button>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductList