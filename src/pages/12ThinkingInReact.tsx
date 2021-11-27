import * as React from 'react';
import Layout from '../Layout';


const ThinkingInReact = () => {


    return (
        <Layout>
            <ol>
                <li>
                    Mock up design
                </li>
                <li>
                    Identify component hierarchy
                </li>
                <li>
                    Mock up components top-down (small examples) or ground-up (big apps)
                        without state, testing as you go.
                </li>
                <li>
                    Add Interactivity. Decide who needs to own the state. Typically it's a component
                    higher in the hierarchy because the state may need to be used by multiple components.
                </li>
                <li>
                    Inverse data flow. Pass callbacks from higher level componenets to lower level components
                    to allow them to update state held higher in the component hierarchy
                </li>
            </ol>

        </Layout>
    )
}


export default ThinkingInReact;