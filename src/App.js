import React from 'react';
import './App.css';
import Display from './Display';
import ButtonControl from './ButtonControl';


class App extends React.Component {

  state = {
    counterValue: 0,
    incStatus: "",
    resetStatus: "disabled",
    counterColor: ""
  }

  changeValue = () => {
    let currentValue = this.state.counterValue;
    let newValue = currentValue;
    if (currentValue < 5) {
      newValue = currentValue + 1;
      this.setState({
        counterValue: newValue,
        resetStatus: ""
      })
    } else {
      this.setState({
        incStatus: "disabled",
        counterColor: "counter-warning"
      })
    }
  }

  resetValue = () => {
    let newValue = 0;
    this.setState({
      counterValue: newValue,
      resetStatus: "disabled",
      incStatus: "",
      counterColor: ""
    })
  }

  render = () => {
    return(
      <div className="App">
        <div className="counter">
          <Display counterValue={this.state.counterValue} counterColor={this.state.counterColor}/>
          <div className="countrol-panel">
          <ButtonControl functionOnClick={this.changeValue} btnName={"inc"} isDisabled={this.state.incStatus}/>
          <ButtonControl functionOnClick={this.resetValue} btnName={"reset"} isDisabled={this.state.resetStatus}/>
          </div>
        </div>
        </div>
   
    );
  } 
}

export default App;
