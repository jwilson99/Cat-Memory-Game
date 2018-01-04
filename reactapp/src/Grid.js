// imports React and its components
import React, {Component} from 'react';

// creates Grid class which extends the React components
class Grid extends Component {
    // constructor takes in props sent from App.js
    constructor(props) {
        super(props);
        // updates state. The state will change for each of the items in App.js's cats array
        this.state = {
            name: this.props.name,
            clicked: this.props.clicked,
            imgUrl: this.props.imgUrl,
            scoreUpdate: this.props.scoreUpdate
        }
    };

    componentDidMount() {
        this.setState({
            name: this.props.name,
            clicked: this.props.clicked,
            imgUrl: this.props.imgUrl,
            scoreUpdate: this.props.scoreUpdate
        })
    }

    // renders data to the page (ultimately through index.js)
    render() {
        return (
            // creates a 'tile' with a click event that triggers the scoreUpdate function (from App.js)
            <div className="tile" onClick={() => this.state.scoreUpdate(this.state.name, this.state.clicked)} >

                <img src={this.state.imgUrl} alt={this.state.name} className="tile-img" />

            </div>
        );
    }
}

// exports Grid class for external use
export default Grid;
