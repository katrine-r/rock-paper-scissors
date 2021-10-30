import React from "react";
import { SVGiconsSelector } from "../SVGiconsSelector/SVGiconsSelector";
import classes from "./PopUpRules.module.css";
import Backdrop from "../Backdrop/Backdrop";

const PopUpRules = (props) => {
  return (
    <React.Fragment>
      <div className={classes.PopUpRules}>
        <div className={classes.WrapperPopUpRules}>
          <div className={classes.HeaderRules}>
            <h1>Rules</h1>
            <div onClick={props.onClick}>
              <SVGiconsSelector id="iconClose" />
            </div>
          </div>
          <div className={classes.IconRules}>
            <SVGiconsSelector id="rules" />
          </div>
        </div>
      </div>
      <Backdrop onClick={props.onClick} />
    </React.Fragment>
  );
};

export default PopUpRules;