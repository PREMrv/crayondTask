let productCount=0;
function displayFormattedProductCount(){
    return productCount > 0 ? productCount : "zero";
}
function ProductDetails(props){
    let badgeClass = 'badge-margin-left-240 badge';
    badgeClass += props.isAvailable ? 'bg-successs' : 'bg-danger';

    return(
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right': 30}}>${props.price}</h6>
            <button className="btn btn-primary">-</button>
            <span style={{padding:'8px 14px','font-size':13}}>
            {displayFormattedProductCount()}
            </span>
            <button className="btn btn-primary">+</button>
            <span className={badgeClass}>{props.isAvailable?'Available':'unavailable'}</span>
        </div>
    )
}
export default ProductDetails;