import * as React from 'react';


class FaucetSelect extends React.Component<{ onFaucetReceive: any }, { selected: number | string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            selected: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selected: Number(e.target.value)
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.onFaucetReceive(this.state.selected, e)}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <select value={this.state.selected} className="form-select" aria-label="select amount to receive from faucet"
                                onChange={this.handleChange}>
                                <option value="0">Withdrawal BTC from faucet</option>
                                <option value="1">1 BTC</option>
                                <option value="3">3 BTC</option>
                                <option value="5">5 BTC</option>
                            </select>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" type="submit">Withdrawal</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}


export default FaucetSelect;