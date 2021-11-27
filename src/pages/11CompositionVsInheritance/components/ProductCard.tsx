import * as React from 'react';

export interface ProductCardModel {
    id: number, // Used as a key on the React Component
    name: string,
    image: string,
    price: number
}

// need to better understand why the footer cannot be labeled React.Component.
class ProductCard extends React.Component<{product : ProductCardModel, footer : any}, {}>{


    render(){
        return (
            <div className="card">
                <img src={this.props.product.image} className="card-img-top" alt="a nft"/>
                <div className="card-body">
                    <h5 className="card-title"> {this.props.product.name} </h5>
                    <p className="card-text">Price: {this.props.product.price} BTC</p>
                    {this.props.footer}
                </div>
            </div>
        )
    }
}


export default ProductCard;