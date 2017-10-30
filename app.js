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

// var Counter = ReactCreateClass({
//     propTypes: {
//         score: PropTypes.number.isRequired
//     },
//     getInitialState: function() {
//         return {
//             score: this.props.score,
//         };
//     },
//     incrementScore: function(e) {
//         this.setState({
//            score: (this.state.score + 1), 
//         });
//     },
//     decrementScore: function(e) {
//         this.setState({
//            score: (this.state.score - 1), 
//         });
//     },
//     render: function(){
//         return (
//             <div className="counter">
//                 <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//                 <div className="counter-score"> {this.state.score} </div>
//                 <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//             </div>
//         );
//     }
// });
function Counter(props){
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment"> + </button>
        </div>
    );
}
Counter.PropTypes = {
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


var Application = ReactCreateClass({
    propTypes: {
        title: PropTypes.string.isRequired,
        initialPlayers: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            score: PropTypes.number.isRequired,
        })).isRequired,
    },
    getDefaultProps: function(){
        return {
            title: "Scoreboard"
        }
    },
    getInitialState: function(){
        return {
            players: this.props.initialPlayers,
        }
    },
    render: function(){
        return (
            <div className="scoreboard">
            <Header title = {this.props.title} />
            <div className="players">
                {this.state.players.map(function(player){
                    return <Player name={player.name} score={player.score} key={player.id} />
                })}
            </div>
            </div>
        );
    }
});


ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('app'));