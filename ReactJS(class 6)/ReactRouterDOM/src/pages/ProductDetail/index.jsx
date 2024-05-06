import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams, useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
    // let { productId , name} = useParams();
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("productId");
    const title = searchParams.get("name");

    console.log(searchParams, "<--- searchparams")
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        getSingleProduct()
    }, [])

    const getSingleProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <Navbar />
      <div>
        <h1>Product Detail</h1>
        <h2>id: {productId}</h2>   
        <img src={product?.image} width={200} height={200} alt="" />     
        <p>{product?.title}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ProductDetail
