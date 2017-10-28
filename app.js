// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactCreateClass from 'create-react-class';

var PLAYERS = [{
        id: 1,
        name: "Slava Shevchenko",
        score: 45
    },{
        id: 2,
        name: "Igor Levik",
        score: 26
    },{
        id: 3,
        name: "Denis Pisarenko",
        score: 35
}]

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

var Counter = ReactCreateClass({
    propTypes: {
        score: PropTypes.number.isRequired
    },
    render: function(){
        return (
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> {this.props.score} </div>
                <button className="counter-action increment"> + </button>
            </div>
        );
    }
});

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
            {props.players.map(function(player){
                return <Player name={player.name} score={player.score} key={player.id} />
            })}
           </div>
        </div>
    );
}

Application.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
    })).isRequired,
};
Application.defaultProps = {
    title: "Scoreboard"
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('app'));