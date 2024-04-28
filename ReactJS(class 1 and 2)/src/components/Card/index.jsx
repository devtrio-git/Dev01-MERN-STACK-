import React from 'react'

export const Card = (props) => {
    console.log(props, "<-- card comp")
    return (
        // <div className="card" style="width: 18rem;">
        <div className="card"style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}
