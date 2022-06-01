import React, {Component} from 'react';
import Header from './components/header/Header';
import HexaColor from './components/color/HexaColor';

class App extends Component{

    render() {
        return (
            <div>
                <Header />
                <HexaColor />
                <h1>This is App from App.js</h1>
            </div>
        )
    }
}
export default App