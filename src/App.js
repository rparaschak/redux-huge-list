import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import store from './store';
import {NotNormalizedComponent} from "./components/NotNormalizedComponent";
import {NormalizedComponent} from "./components/NormalizedComponent";
import {StateComponentWithInternal} from "./components/StateComponentWithInternal";
import {StateComponentWithInput} from "./components/StateComponentWithInput";

import './App.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <ul>
                        <li><NavLink to="/not-normalized">Not Normalized</NavLink></li>
                        <li><NavLink to="/normalized">Normalized</NavLink></li>
                        <li><NavLink to="/stateWithMemo">State with memo</NavLink></li>
                        <li><NavLink to="/stateWithInput">State with input</NavLink></li>
                    </ul>
                    {<div>
                        <Route exact path="/not-normalized">
                            <NotNormalizedComponent/>
                        </Route>
                        <Route path="/normalized">
                            <NormalizedComponent/>
                        </Route>
                        <Route path="/stateWithMemo">
                            <StateComponentWithInternal/>
                        </Route>
                        <Route path="/stateWithInput">
                            <StateComponentWithInput/>
                        </Route>
                    </div>}
                </Router>

            </Provider>
        </div>
    );
}

export default App;
