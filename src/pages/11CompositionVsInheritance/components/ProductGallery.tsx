import * as React from 'react';
import NftProductCard, { NftProductCardModel } from './NftProductCard';





class ProductGallery extends React.Component<{products: NftProductCardModel[], onPurchase: any}, {}> {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.products.map(product =>
                            // Key uniquely identifies element in list 
                            <div key={product.id} className="col">
                                <NftProductCard product={product} onPurchase={this.props.onPurchase}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }



}


export default ProductGallery;