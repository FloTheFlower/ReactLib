import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import { loadEvents } from './app/event/eventActions';
import ReduxToastr from 'react-redux-toastr'


const store = configureStore();
store.dispatch(loadEvents())

const RootEl =  document.getElementById('root');

let render = () => {
    ReactDOM.render(
   <Provider store={store}>
   <BrowserRouter>
   <ReduxToastr 
   position='bottom-right'
   transitionIn='fadeIn'
   transitionOut='fadeOut'
   />
        <App />
    </BrowserRouter>
   </Provider>
   

, RootEl)

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

