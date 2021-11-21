import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Layout = ({children, history} : {children : any, history?: any}) => {

    return (
        <div id="layout" className="container">
            <div className="row align-items-center">
                <div className="col-4">
                    <h2>React Examples</h2>
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rendering-elements">3 - Rendering Elements</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/components-and-props">4 - Components and Props</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/state-and-lifecycle">5 - State and Lifecycle</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/handling-events">6 - Handling Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/conditional-rendering">7 - Conditional Rendering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lists-and-keys">8 - Lists and Keys</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forms">9 - Forms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/lifting-state-up">10 - Lifting State Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/composition-vs-inheritance">11 - Composition Vs Inheritance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/thinking-in-react">12 - Thinking in React</Link>
                        </li>
                    </ul>
                </div>
                <div id="layout-content" className="col-8">
                    {children}
                </div>
            </div>
        </div>
    );
}


export default Layout;