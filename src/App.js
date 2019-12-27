import React from 'react';
import './App.css';
import Display from './Display';
import ButtonControl from './ButtonControl';


class App extends React.Component {
  render = () => {
    return(
      <div className="App">
        <Display />
        <br />
        <br />
        <div>
          <ButtonControl btnName={"inc"}/>
          <ButtonControl btnName={"reset"}/>
        </div>
      </div>
    );
  } 
}

export default App;
