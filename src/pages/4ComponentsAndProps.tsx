import * as React from 'react';
import Layout from '../Layout';


// Props are immutable.
// The component will need to be rerendered w/ different values for the props
class PostPreview extends React.Component<any, any> {

    render() {
        return (
            <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">{this.props.seller}</div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

const ComponentsAndProps = () => {


    return (
        <Layout>
            <PostPreview title="iPad Pro" seller="Ben" description="iPad Pro 5th gen for sale."/>
        </Layout>
    )
}

export default ComponentsAndProps;