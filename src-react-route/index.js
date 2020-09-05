import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import './index.css'

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>

    ),

    document.getElementById('root')
);


