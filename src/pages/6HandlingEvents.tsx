import * as React from 'react';
import Layout from '../Layout';


// Component has generic types for props & state.
class HandlingEvents extends React.Component<{}, {sqrt: number | string, count: number}> {

    constructor(props: any){
        super(props);
        this.state = {
            count: 0,
            sqrt: "Not yet calculated" // Calculated Lazily on Demand
        };

        // Functions of class are not bound to instance of class by default
        this.increment = this.increment.bind(this);
        this.increment = this.increment.bind(this);
    }


    increment(e : React.SyntheticEvent) : void {
        this.setState((prevState : any) => ({
            count : prevState.count + 1
        }))
    }

    calcSquareRoot(count: number, e : React.SyntheticEvent){
        this.setState({
            sqrt: count**2
        })
    }

    render() {
        return(
            <Layout>
                <button className="btn btn-primary" onClick={this.increment}>Increment</button>
                <p>Click count: {this.state.count}</p>

                <button className="btn btn-primary" onClick={this.calcSquareRoot.bind(this, this.state.count)}>
                    Calculate Square Root
                </button>
                <p>Square Root of Count: {this.state.sqrt} </p>
            </Layout>
        );
    }
}


export default HandlingEvents;