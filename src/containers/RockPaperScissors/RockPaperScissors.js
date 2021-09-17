import React, { Component } from "react";
import classes from "./RockPaperScissors.module.css";
import ResultsRockPaperScissors from '../../components/ResultsRockPaperScissors/ResultsRockPaperScissors'
import Button from '../../components/UI/Button/Button'

class RockPaperScissors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clickButton: false,
      myChoice: "",
      randomChoice: "",
      winner: "",
      userCounter: 0,
      pcCounter: 0
    };
    
    this.onClickChoiceHandler = this.onClickChoiceHandler.bind(this)
    this.myChoiceHandler = this.myChoiceHandler.bind(this)
  }

  getRandomNumberMinMax(min,max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)

    let randomChoice;

    if (random === 1) {
      randomChoice = "paper";
      this.setState(
        {
          randomChoice: "paper"
        },
        () => {
          console.log("randomChoice ", this.state.randomChoice);
        }
      );
    } else if (random === 2) {
      randomChoice = "scissors";
      this.setState(
        {
          randomChoice: "scissors"
        },
        () => {
          console.log("randomChoice ", this.state.randomChoice);
        }
      );
    } else if (random === 3) {
      randomChoice = "rock";
      this.setState(
        {
          randomChoice: "rock"
        },
        () => {
          console.log("randomChoice ", this.state.randomChoice);
        }
      );
    }
    return randomChoice;
  }
  
  myChoiceHandler = (event) => {
    this.setState(
      {
        myChoice: event.target.id
      },
      () => {
        console.log(this.state.myChoice);
      }
    );
    return event.target.id;
  };

  onClickChoiceHandler(event) {
    const myChoice = this.myChoiceHandler(event);
    console.log("user ", myChoice);
    const randomChoice = this.getRandomNumberMinMax(1, 3);
    console.log("pc ", randomChoice);

    this.setState({
      clickButton: true
    });

    if (
      (myChoice === "paper" && randomChoice === "rock") ||
      (myChoice === "rock" && randomChoice === "scissors") ||
      (myChoice === "scissors" && randomChoice === "paper")
    ) {
      this.setState({
        winner: "You win",
        userCounter: this.state.userCounter + 1
      });
    } else if (myChoice === randomChoice) {
      this.setState({
        winner: "Draw"
      });
    } else {
      this.setState({
        winner: "You lose",
        pcCounter: this.state.pcCounter + 1
      });
    }
  }

  onClickTryAganHandler = () => {
    this.setState({
      clickButton: false
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
                <div className={classes.ResultsScore}>
                  <div className={classes.AccountScore}>
                    <small>user</small>
                    <p>{this.state.userCounter}</p>
                  </div>
                  <div className={classes.AccountScore}>
                    <small>pc</small>
                    <p>{this.state.pcCounter}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.ChoiceOfAction}>
          { this.state.clickButton ? 
            <ResultsRockPaperScissors 
              clickButton={this.state.clickButton}
              myChoice={this.state.myChoice}
              randomChoice={this.state.randomChoice}
              winner={this.state.winner}
              onClick={this.onClickTryAganHandler}
            /> 
            : (
              <div className={classes.WrapperButton}>
                <div className={classes.PositionPaperScissors}>
                  <Button
                    id="paper"
                    type="paper"
                    onClick={this.onClickChoiceHandler}
                  >
                    Paper
                  </Button>
                  <Button
                    id="scissors"
                    type="scissors"
                    onClick={this.onClickChoiceHandler}
                  >
                    Scissors
                  </Button>
                </div>
                <div className={classes.PositionRock}>
                  <Button
                    id="rock"
                    type="rock"
                    onClick={this.onClickChoiceHandler}
                  >
                    Rock
                  </Button>
                </div>
              </div>
            )}       
        </div>
        <div className={classes.PositionButtonRules}>
          <button className={classes.ButtonRules}>Rules</button>
        </div>
      </div>
    );
  }
}

export default RockPaperScissors;
