import * as React from 'react';
import ProductCard, { ProductCardModel } from './ProductCard';





class ProductGallery extends React.Component<{products: ProductCardModel[], onPurchase: any}, {}> {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.products.map(product =>
                            <div className="col">
                                <ProductCard product={product} onPurchase={this.props.onPurchase}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }



}


export default ProductGallery;