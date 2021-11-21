import * as React from 'react';
import Layout from '../Layout';
import ReactDOM from 'react-dom';
import {useLocation} from 'react-router-dom';

// Render Layout Component so that we can call ReactDOM.render to render components within it.
// We set a timer when we navigate to this page to re-render a timer every second for 5 seconds
const RenderingElements  = () => {

    let location = useLocation();

    React.useEffect(() => {
        let timerId = setInterval(tick, 1000);
        setTimeout(() => clearInterval(timerId), 5000)
    }, [location])

    return(
        <Layout>

        </Layout>
    )
}

// Manually and explicitly call ReactDOM.render() to rerender component state.
function tick(){
    const element = (
        <div>
            <h2>Render ticker using ReactDOM.render</h2>
            <p>Date Time: {new Date().toUTCString()}</p>
            <p>Need to wait 5 seconds before navigating to allow timer to finish</p>
        </div>
    );

    ReactDOM.render(element, document.getElementById("layout-content"));
}


export default RenderingElements;