// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    );
} 

Header.propTypes = {
    title: PropTypes.string.isRequired
}
function Counter(props) {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired
}

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>
            <div className="player-score">
                <Counter score={props.score} />
            </div>
        </div>
    );
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}

function Application(props) {
    return (
        <div className="scoreboard">
           <Header title = {props.title} />
           <div className="players">
               <Player name="Jim Hoskins" score={31} />
               <Player name="Ben Karry" score={27} />
               <Player name="Ganny Pit" score={42} />
           </div>
        </div>
    );
}

Application.propTypes = {
    title: PropTypes.string.isRequired
};
Application.defaultProps = {
    title: "Scoreboard"
};

ReactDOM.render(<Application />, document.getElementById('app'));