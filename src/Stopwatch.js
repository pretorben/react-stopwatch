import React, { Component } from 'react';
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      paused: true,
    }
    this.timerId = null
  }

  startButton(e){
    if(!this.timerId){
      this.timerId = setInterval( _ => this.countSeconds(), 1000);
    }
  }

  pauseButton(e){
    let paused = !this.state.paused;
    if(paused){
      this.resetTimer();
      this.setState({
        paused,
      })
    }
    else{
      this.startButton();
    }
  }

  resetButton(e){
    this.resetTimer();
    this.setState({
      seconds: 0,
      paused: true,
    })
  }

  countSeconds(){
    this.setState({
      seconds: this.state.seconds +1,
      paused: false
    })
  }

  resetTimer(){
    clearInterval(this.timerId);
    this.timerId = null;
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button onClick={ e => this.resetButton(e) }>Reset</button>
          <button onClick={ e => this.startButton(e) }>Start</button>
          <button onClick={ e => this.pauseButton(e) }>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
