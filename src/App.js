import React from 'react';
import './App.css';
import Display from './Display';
import ButtonControl from './ButtonControl';


class App extends React.Component {

  state = {
    counterValue: 1,
    incStatus: "",
    resetStatus: "disabled"
  }

  changeValue = () => {
    let newValue = this.state.counterValue + 1;
    this.setState({
      counterValue: newValue,
      resetStatus: ""
    })
  }

  resetValue = () => {
    let newValue = 0;
    this.setState({
      counterValue: newValue,
      resetStatus: "disabled"
    })
  }

  render = () => {
    return(
      <div className="App">
        <Display counterValue={this.state.counterValue}/>
        <br />
        <br />
        <div>
          <ButtonControl functionOnClick={this.changeValue} btnName={"inc"} isDisabled={this.state.incStatus}/>
          <ButtonControl functionOnClick={this.resetValue} btnName={"reset"} isDisabled={this.state.resetStatus}/>
        </div>
      </div>
    );
  } 
}

export default App;
