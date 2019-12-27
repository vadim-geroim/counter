import React from "react";
import "./App.css";

class ButtonControl extends React.Component {
  render = () => {
    return (
      <span>
        <button onClick={this.props.functionOnClick}>{this.props.btnName}</button>
      </span>
    );
  };
}

export default ButtonControl;
