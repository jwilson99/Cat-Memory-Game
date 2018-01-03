// imports React and its components
import React, {Component} from 'react';
import Tile from './Tile.js';

// creates Grid class which extends the React components
class Grid extends Component {
    // constructor takes in props sent from App.js
    constructor(props) {
        super(props);
        // updates state. The state will change for each of the items in App.js's cats array
        this.state = {
            name: this.props.name,
            clicked: this.props.clicked,
            imgUrl: this.props.imgUrl
        }
    };

    // renders data to the page (ultimately through index.js)
    render() {
        return (
            <div className="tile not-clicked">

                <img src={this.state.imgUrl} alt={this.state.name} className="tile-img"/>

            </div>
        );
    }
}

// exports Grid class for external use
export default Grid;
