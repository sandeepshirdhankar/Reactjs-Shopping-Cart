import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = ({cart,setCart}) => {
  const {id}=useParams();
 const [product,setProduct] =useState({});
 const [relatedProducts,setRelatedProducts]=useState([]);
 
 useEffect(()=>{
    const filterProduct=items.filter((product)=>product.id==id)
    
   //
    //console.log(filterProduct);
    setProduct(filterProduct[0]);
    const relatedProducts=items.filter((item)=>item.category===product.category)
    console.log("related Products=" ,relatedProducts );
    setRelatedProducts(relatedProducts);

 },[id,product.category]);

 const addToCart=(id,price,title,description,imgSrc)=>{
  const obj={
    id,price,title,description,imgSrc
  }
  setCart([...cart,obj]);
  console.log("Cart element=",cart);
 
  
};

  return (
    <>
   

    <div className="container con">

      <div className="img">
          <img src={product.imgSrc} alt="" />
      </div>
      <div>

      <h1 className="card-title">{product.title}</h1>
                        <p className="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                        <button
                        onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                        className="btn btn-warning">Add To Cart</button>
      </div>
    </div>
    <Product cart={cart} setCart={setCart} items={relatedProducts}/>
    </>
  )
}

export default ProductDetails
