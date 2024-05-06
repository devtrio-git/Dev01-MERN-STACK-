import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Navbar />
            <div className='d-flex flex-wrap'>
                {data?.map((item, key) => (
                    <div className="card" style={{width: '18rem'}}>
                        <img src={item.image} className="card-img-top" height="400" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <Link to={`/productDetail/${item.id}/${item.description}`} className="btn btn-primary">Product Detail</Link> */}
                                <Link to={`/productDetail?productId=${item.id}&name=${item.title}`} className="btn btn-primary">Product Detail</Link>
                                
                            </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products

                  // /:id
// --> /productDetail/2/title

// --> /productDetail?id="dsadsad"&name="nasdasad"&title:"asdadad"