/*Cell.js*/
import React, { Component } from 'react';

const bgColors = {
    normal: 'white',
    challenge: 'lightblue',
    correct: 'lightgreen',
    wrong: 'pink',
};

class Cell extends Component {
    status = () => {
        if (this.props.isActive) {
            return 'challenge';
          }
        if (this.props.isClicked) {
              return this.props.isChallenge ? 'correct' : 'wrong';
        }
        
        return 'normal';
    };

    backgroundColor = () => {
        return this.props.isActive ? bgColors['challenge'] : bgColors['normal'];
    };

    handleClick = () => {
       this.props.onClickAction(this.props.id);
        // console.log(this.props);
        // console.log('Clicked', this.props.id); 
    };

     onCellClick = () => {
         console.log("Cell click from parent");
     }
    render() {
        console.log(this.props);
        return (
            <div 
                className='cell' 
                style={{width:'25%', backgroundColor: bgColors[this.status()] }} 
                onClick={ this.handleClick}
            />
        );
    }
}

export default Cell;

