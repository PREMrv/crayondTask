import React from "react";
function Product(props){
    return(
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-colum flex-lg-row p-3 d-fles">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold md-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <productDetails price={props.price}isAvailable={props.isAvailable}/>

                </div>
                <img onScroll={(props.imageurl)} alt="Generic placeholder image" width="100"></img>
            </div>
        </li>
    )
}
export default Product;