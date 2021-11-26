import * as React from 'react';
import Layout from '../../Layout';
import { ProductCardModel } from './components/ProductCard';
import ProductGallery from './components/ProductGallery';
import NftMonkey from '../../assets/nft-monkey.jpeg';
import NftCryptoKitty from '../../assets/nft-crypto-kitty.jpeg';
import NftCyberPunk from '../../assets/nft-crypto-punk.png';

let products: ProductCardModel[] = [
    {
        id: 1,
        name: "NFT Cyber Punk",
        price: 2,
        image: NftCyberPunk
    },
    {
        id: 2,
        name: "NFT Crypto Kitty",
        price: 1,
        image: NftCryptoKitty
    },
    {
        id: 3,
        name: "NFT Monkey",
        price: 5,
        image: NftMonkey
    }
]

class ConditionalRendering extends React.Component<{}, { balance: number, assets: Array<string>, products: ProductCardModel[], renderAlert: boolean }> {

    constructor(props: any) {
        super(props);

        this.state = {
            balance: 5,
            assets: [],
            products: products,
            renderAlert: false
        };

        this.onPurchase = this.onPurchase.bind(this);
    }

    onPurchase(product: ProductCardModel, e: React.SyntheticEvent): undefined {

        if (this.state.balance < product.price) {
            this.setState({ renderAlert: true });
            return;
        }

        let unPurchasedAssets = this.state.products.filter(asset =>
            asset.name !== product.name
        );

        this.state.assets.push(product.name);

        this.setState(prevState => ({
            assets: prevState.assets,
            products: unPurchasedAssets,
            balance: prevState.balance - product.price
        }));

        return;
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Conditionally render based on list of products passed in */}
                            <ProductGallery products={this.state.products} onPurchase={this.onPurchase} />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <h2>Wallet Balance: {this.state.balance} BTC</h2>
                        </div>
                    </div>
                    <div className="row">
                        <h5>Assets: {
                            this.state.assets.length === 0
                                ? "You own no assets"
                                : this.state.assets.reduce((prevVal, currentVal, assets) => `${prevVal}, ${currentVal}`)
                        }
                        </h5>
                    </div>
                    {this.state.renderAlert &&
                        <div className="alert alert-danger" role="alert">
                            You do not have sufficient funds to buy this NFT
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                onClick={() => this.setState({ renderAlert: false })}/>
                        </div>
                    }
                </div>
            </Layout>
        );
    }
}


export default ConditionalRendering;