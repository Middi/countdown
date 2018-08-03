import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


class Wrapper extends React.Component {
    store = configureStore();

    render() {

        this.store.subscribe(() => {
            console.log('store state:', this.store.getState());
        });

        return (
            <Provider store={this.store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
