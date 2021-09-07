import React, { Component } from "react";
import classes from "./RockPaperScissors.module.css";
// import ChoiceOfAction from "../../components/ChoiceOfAction/ChoiceOfAction";

function getRandomNumberMinMax(min, max) {
  const randomChoice = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("randomChoice ", randomChoice);
  return randomChoice;
}

// 1 - Paper
// 2 - Scissors
// 3 - Rock

class RockPaperScissors extends Component {
  state = {
    clickButton: false,
    myChoice: null,
    randomChoice: null
  };

  // My Choice - PAPER
  onClickPaperHandler = () => {
    const myChoice = 1;
    console.log("click Paper ", myChoice);
    const randomChoice = getRandomNumberMinMax(1, 3);
    if (myChoice === randomChoice) {
      console.log("Draw!");
    }
    if (randomChoice === 2) {
      console.log("You lose!");
    }
    if (randomChoice === 3) {
      console.log("You win!");
    }
    this.setState({
      // clickPaper: true,
      myChoice,
      randomChoice,
      clickButton: true
    });
  };

  // My Choice - SCISSORS
  onClickScissorsHandler = () => {
    const myChoice = 2;
    console.log("click Scissors ", myChoice);
    const randomChoice = getRandomNumberMinMax(1, 3);
    if (myChoice === randomChoice) {
      console.log("Draw!");
    }
    if (randomChoice === 3) {
      console.log("You lose!");
    }
    if (randomChoice === 1) {
      console.log("You win!");
    }
    this.setState({
      myChoice,
      randomChoice,
      clickButton: true
    });
  };

  // My Choice - ROCK
  onClickRockHandler = () => {
    const myChoice = 3;
    console.log("click Rock ", myChoice);
    const randomChoice = getRandomNumberMinMax(1, 3);
    if (myChoice === randomChoice) {
      console.log("Draw!");
    }
    if (randomChoice === 1) {
      console.log("You lose!");
    }
    if (randomChoice === 2) {
      console.log("You win!");
    }
    this.setState({
      myChoice,
      randomChoice,
      clickButton: true
    });
  };

  render() {
    return (
      <div className={classes.RockPaperScissors}>
        <div className={classes.Wrapper}>
          <div className={classes.WrapperLogoScore}>
            <div className={classes.Logo}>
              <h1>Rock</h1>
              <h1>Paper</h1>
              <h1>Scissors</h1>
            </div>
            <div className={classes.WrapperScore}>
              <div className={classes.Score}>
                <small>Score</small>
                <p>12</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.ChoiceOfAction}>
          <div className={classes.WrapperButton}>
            <div className={classes.PositionPaperScissors}>
              <button
                className={classes.Paper}
                onClick={this.onClickPaperHandler}
              >
                Paper
              </button>
              <button
                className={classes.Scissors}
                onClick={this.onClickScissorsHandler}
              >
                Scissors
              </button>
            </div>
            <div className={classes.PositionRock}>
              <button
                className={classes.Rock}
                onClick={this.onClickRockHandler}
              >
                Rock
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RockPaperScissors;
