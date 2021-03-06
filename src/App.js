import sampleSize from "lodash.samplesize";
import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import Cell from "./Cell.js";

const messages = {
  win: "You won...",
  lose: "Game Over",
  challenge: "Remember these cell now",
  play: "Which cells were blue?"
};

class Game extends Component {
  // read: this.state.answer
  // this.setSate({ answer: 37 });
  cellIds = Array.from({ length: 16 }, (_, i) => i);
  challengeCellIds = sampleSize(this.cellIds, 6);

  state = {
    gameStatus: "challenge", // 'play', 'win', 'lose'
    clickedCells: []
  };

  componentDidMount() {
    this.timerId = setTimeout(() => {
      this.setState({ gameStatus: "play" });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  // Should the cell be blue?
  isCellActive = id => {
    const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
    return isCellChallenge && this.state.gameStatus === "challenge";
  };

  onCellClick = cellId => {
    this.setState(prevState => {
      return {
        clickedCells: [...prevState.clickedCells, cellId]
      };
    });
  };

  render() {
    return (
      <div className="game">
        <div className="help">
          You will have 3 seconds to memorize X blue random cells{" "}
        </div>{" "}
        <div className="grid challenge">
          {" "}
          {this.cellIds.map(id => {
            const isCellChallenge = this.challengeCellIds.indexOf(id) >= 0;
            const isCellClicked = this.state.clickedCells.indexOf(id) >= 0;

            return (
              <Cell
                key={id}
                id={id}
                onClickAction={this.onCellClick}
                isActive={this.isCellActive(id)}
                isChallenge={isCellChallenge}
                isClicked={isCellClicked}
              />
            );
          })}{" "}
        </div>{" "}
        <button onClick={this.props.playAgainAction}> Play Again </button>{" "}
        <div className="message"> {messages[this.state.gameStatus]} </div>{" "}
      </div>
    );
  }
}

export default Game;
