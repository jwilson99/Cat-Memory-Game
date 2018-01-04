// imports React and its components, the stylesheet (App.css), and the app components
import React, {Component} from 'react';
import './css/App.css';
import Header from './Header.js';
import Grid from './Grid.js';
// imports cat images
import cat from './images/cat.jpg';
import cat1 from './images/cat1.jpeg';
import cat2 from './images/cat2.jpeg';
import cat3 from './images/cat3.jpeg';
import cat4 from './images/cat4.jpeg';
import cat5 from './images/cat5.jpeg';
import cat6 from './images/cat6.jpeg';
import cat7 from './images/cat7.jpeg';
import cat8 from './images/cat8.jpeg';
import cat9 from './images/cat9.jpeg';
import cat10 from './images/cat10.jpeg';
import cat11 from './images/cat11.jpeg';

import cats from './cat';

// function to shuffle array of objects
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// creates a new class, App which extends the React Component
class App extends Component {
    // stores the score and cat options in the state of App
    state = {
        score: 0,
        cats
    };

    // function to update score state
    scoreUpdate = (id, clicked) => {

        const catsArray = this.state.cats;

        if (!clicked) {
            this.setState({cats: catsArray});
            catsArray.forEach( (cat) => {
                if (cat.name === id && cat.clicked === false) {
                    cat.clicked = true;
                    this.setState({cats: catsArray, score: this.state.score + 1})
                }
            })
        } else if (clicked) {
            catsArray.forEach( (cat) => {
                cat.clicked = false;
            });
            this.setState({cats: catsArray, score: 0});
        }
    };


    // renders data to the page (ultimately through index.js)
    render() {
        const shuffledArray = shuffleArray(this.state.cats);
        return (
            <div className="App">
                <Header score={this.state.score}/>

                <div className="grid">
                    {shuffledArray.map((cat) =>
                    <Grid name={cat.name} clicked={cat.clicked} imgUrl={cat.imgUrl} scoreUpdate={this.scoreUpdate} key={cat.key}/>
                    )}
                </div>

            </div>
        );
    }

}

// exports App for external use
export default App;
