import React from 'react'
import classes from './ResultsRockPaperScissors.module.css'
import Button from "../UI/Button/Button";

const ResultsRockPaperScissors = props => {
    return (
        <div className={classes.ResultsRockPaperScissors}>
            <div className={classes.Wrapper}>
                <div className={classes.WrapperButton}>
                <div className={classes.PositionPaperScissors}>
                    <Button
                        id={props.myChoice}
                        type={props.myChoice}
                        disabled="disabled"
                    >
                    {props.myChoice}
                    </Button>
                    <div className={classes.WhoIsTheWinner}>
                        <div>
                            <div className={classes.Winner}>{props.winner}</div>
                            <button className={classes.TryAgan} onClick={props.onClick}>
                            Try agan
                            </button>
                        </div>
                    </div>

                    <Button
                        id={props.randomChoice}
                        type={props.randomChoice}
                        disabled="disabled"
                    >
                        {props.randomChoice}
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ResultsRockPaperScissors