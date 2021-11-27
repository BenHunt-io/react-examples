import * as React from 'react';
import { Modal } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ProductCard, { ProductCardModel } from './ProductCard';

export interface NftProductCardModel extends ProductCardModel {
    meta: NftMeta
}

export interface NftMeta {
    title: string,
    royalty_percent: number,
    resellable: boolean,
    tokenId: string,
    edition_number: number,
    edition_total: number
}

class NftProductFooter extends React.Component<{product : NftProductCardModel, onPurchase : any}, {showModal: boolean}> {

    constructor(props: any){
        super(props);
        this.state = {
            showModal: false
        };

        this.toMarkdown = this.toMarkdown.bind(this);
    }

    toMarkdown(metaData: NftMeta) : string {
        return `\`\`\`code\n${JSON.stringify(metaData, null, 2)}\n\`\`\``;
    }


    render(){
        return(
            <div>
                <button type="button" className="btn btn-info" onClick={() => this.setState({showModal:true})}
                     data-bs-toggle="modal" data-bs-target="#exampleModal">meta</button>
                <button className="btn btn-primary" onClick={(e) => this.props.onPurchase(this.props.product, e)}>buy</button>

                <Modal show={this.state.showModal} onHide={() => this.setState({showModal:false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>Meta</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ReactMarkdown  children={this.toMarkdown(this.props.product.meta)}/>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

class NftProductCard extends React.Component<{product : NftProductCardModel, onPurchase : any}, {}>{

    render(){
        return (
            <ProductCard product={this.props.product} 
                footer={<NftProductFooter product={this.props.product} onPurchase={this.props.onPurchase}/>}
            />

        )
    }
}


export default NftProductCard;