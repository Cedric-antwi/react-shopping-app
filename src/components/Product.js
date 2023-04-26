import React from "react"

function Product(props){

    return (
        <>
        <div className="products">
            <div className="product-container">
                <img src={props.img} alt='tech products' height="250px" width="350px" id="product1"/>
                <button onClick={event => {props.increment(); props.basketTotal(props.price);}}>Add to Basket</button>
                <span className="price">£:{props.price}</span>
                <button onClick={event => props.deleteProduct(event)}>Delete Item</button>

            </div>

        </div>
        </>
    )
}

export default Product

// onClick={event => props.deleteProduct(event)}