import React, { Component } from 'react';
import logo from '../../static/logo.svg';
import './index.css';

import { Provider } from 'react-redux';
import createStore from '../../store';
import CommentForm from '../../modules/Comment/containers/CommentContainer';

const { store } = createStore();

const App = () => {

    return (
    <Provider store={store}>
        <div className="App">
            <header className="App-header">
                <h1>Comments</h1>
            </header>
            <div className="container">
                <CommentForm />
            </div>
        </div>
    </Provider>
    );
};

export default App;
