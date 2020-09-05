import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import App from "./component/app";
import {counter} from "./redux/reducers";

const store = createStore(counter);
console.log(store)

let render = ()=> ReactDOM.render(
    (
            <App store={store} />
    ),

    document.getElementById('root')
);

render()

store.subscribe(render)