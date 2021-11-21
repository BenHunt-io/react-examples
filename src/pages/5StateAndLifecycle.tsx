import * as React from 'react';
import Layout from '../Layout';


class Clock extends React.Component<{}, any> {

    constructor(props : any){
        super(props);
        this.state = {clock: new Date()}
    }

    componentDidMount(){
        let timerId = setInterval(() => this.tick(), 1000);
        this.setState({
            timerId: timerId
        });
    }

    componentWillUnmount(){
        if(this.state.timerId){
            clearInterval(this.state.timerId);
        }
    }

    tick(){
        this.setState({
            clock: new Date()
        })
    }

    render() {
        return(
            <div>
                <h2>Render ticker using React Component & update using component state.</h2>
                {/* Data Flows Down */}
                <FormattedDate date={this.state.clock}/>
            </div>
        );
    }
}

const FormattedDate = ({date} : {date : Date}) => (
    <p>Date Time: props.date: {date.toTimeString()}</p>
)


const StateAndLifecycle = () => {

    return (
        <Layout>
            <Clock/>
        </Layout>
    )
}

export default StateAndLifecycle;