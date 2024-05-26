import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/cartSlice';

const Product = (props) => {
    const dispatch = useDispatch();
    return (
        <div class="card" style={{width:"18rem"}}>
            <img src={props.data.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.title.slice(0,15)}...</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={()=> dispatch(addProduct(props.data))} class="btn btn-primary">Add to Cart</button>
                </div>
        </div>
    )
}

export default Product
