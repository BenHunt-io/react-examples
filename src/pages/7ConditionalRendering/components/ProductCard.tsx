import * as React from 'react';

export interface ProductCardModel {
    name: string,
    image: string,
    price: number
}

class ProductCard extends React.Component<{product : ProductCardModel, onPurchase : any}, {}>{

    render(){
        return (
            <div className="card">
                <img src={this.props.product.image} className="card-img-top" alt="a nft"/>
                <div className="card-body">
                    <h5 className="card-title"> {this.props.product.name} </h5>
                    <p>Price: {this.props.product.price} BTC</p>
                    <button className="btn btn-primary" onClick={(e) => this.props.onPurchase(this.props.product, e)}>buy</button>
                </div>
            </div>
        )
    }
}


export default ProductCard;