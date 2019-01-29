/*eslint-disable*/
import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Home from './Home';
import './App.css';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            /* Newsfeed */
            // <MainContainer />
            /* Home */
            <Home />
        );
    }
}

export default App;

/*eslint-enable*/
