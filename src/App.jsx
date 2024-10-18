import { useEffect, useState } from "react";
import './App.css';
import { Routes, Route ,useNavigate} from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import ProductUpdate from "./page/ProductUpdate";
import ProductAdd from "./page/ProductAdd";


function App() {
  const [products, setProducts] = useState ([]);
  const navigate = useNavigate();

  useEffect(()=> {
    fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data)=> setProducts(data));
  },[]);

  const onHandleRemove = (id) => {
    if(confirm("Bạn có muốn xóa không ?")) {
      fetch(`http://localhost:3000/products/${id}`,{
        method: "DELETE",
      }).then(()=> setProducts(products.filter((item)=> item.id !== id)));
    }
  };
  const onHandleSubmit = (inputValues) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    }).then((response) => response.json())
    .then((data) => setProducts([...products, data]))
    .then(()=> navigate("/admin/products"))
  };
  const onHandleUpdate = (inputValues) => {
    fetch(`http://localhost:3000/products/${inputValues.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    }).then((response) => response.json())
    .then((data) =>
      setProducts(products.map((item) => (item.id == data.id ? data : item)))
    )
    .then(() => navigate("/admin/products"));
  }
  return (
  <>
    <Routes>
      <Route path="/admin" element={<HomePage/>}/>
      <Route path="/admin/products" element={<ProductList products={products} onHandleRemove={onHandleRemove}/>}/>
      <Route path="/admin/products/add" element={<ProductAdd products={products} onHandleSubmit={onHandleSubmit}/>}/>
      <Route path="/admin/products/:id/update" element={<ProductUpdate products={products} onHandleUpdate={onHandleUpdate}/>}/>
      <Route path="/admin/products/:id" element={<ProductDetail products={products}/>}/>
    </Routes>
  </>
  )
}

export default App;
