import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../store/cartSlice';

const Navbar = () => {
    const list = useSelector(state=> state.cart.list)
    const dispatch = useDispatch();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">

                            <FaCartArrowDown style={{ fontSize: "25px", cursor:"pointer" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                            {list?.length}
                        </form>
                    </div>
                </div>
            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    {list?.length>0 ? list?.map((item,key)=>(
                        <div className='cartItem d-flex justify-content-between'>
                            <div className='cartImage'> 
                                <img src={item.image} alt="" />
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div>{item.price}</div>
                            </div>
                            <div>
                                <button onClick={()=>dispatch(removeProduct(item.id))} className='btn btn-danger'>rem</button>
                            </div>
                        </div>
                        
                    )) : "Cart is Empty"}
                </div>
            </div>
        </>

    )
}

export default Navbar
