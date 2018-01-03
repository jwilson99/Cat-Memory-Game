// imports React and its components and the logo image (logo.png)
import React, {Component} from 'react';
import logo from './images/logo.png';

// creates a Header class which extends the React component
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo hvr-bounce-in" alt="logo" title="show/hide instructions"/>
                <h1 className="App-title">Clicky Game</h1>
                <p className="App-intro">Click an image to gain a point<br/>
                    Do not click an image more than once though or you'll have to start over!</p>
            </header>
        );
    }
}

// exports Header class for external use
export default Header;
