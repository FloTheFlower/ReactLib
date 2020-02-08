import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

const RootEl =  document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, RootEl)
}

if (module.hot) {
    module.hot.accept('./app/App', () => {
        setTimeout(render);

    })
}

render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
