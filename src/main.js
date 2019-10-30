import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

render(

        <HashRouter>
            <App></App>
        </HashRouter>

    ,
    document.getElementById('app')
)