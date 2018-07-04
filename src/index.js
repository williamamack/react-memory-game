import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import Game from './App';

class Container extends React.Component {
    state = {
        gameId: 1
    };

    resetGame = () => {
        this.setState({ gameId: this.state.gameId + 1 });
    };

    render() {
        return <Game key={this.state.gameId} playAgainAction={this.resetGame} />;
    }

}

ReactDOM.render(<Container />, document.getElementById('root'));
//registerServiceWorker();
