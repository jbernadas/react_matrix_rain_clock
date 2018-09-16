import React, { Component } from 'react';
import './MatrixClock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    var date = this.getTimeString();
    this.state = {
      time: date
    }
  }
  componentDidMount() {
    const _this = this;
    this.timer = setInterval(function(){
      var date = _this.getTimeString();
      _this.setState({
        time: date
      })
    },1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  getTimeString() {
    // create immutable date equal to new Date instance
    const date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    // if currentHours is equal to 0 currentHours is 12
    if(currentHours === 0) {
      currentHours = 12;
    }
    // if currentHours greater than 12 do nothing
    if(currentHours > 12){
    }

    // currentHours less than 10? then it is 0 plus currentHours; else currentHours.
    currentHours = (currentHours < 10) ? "0" + currentHours : currentHours;
    // currentMinutes less than 10? then it is 0 plus currentMinutes; else currentMinutes.
    currentMinutes = (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;
    // currentSeconds less than 10? then it is 0 plus currentSeconds; else currentSeconds.
    currentSeconds = (currentSeconds < 10) ? "0" + currentSeconds: currentSeconds; 
    
    // putting it all together. time variable will be equal to currentHours semicolon
    // currentMinutes semicolon currentSeconds.
    let time = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    // result of time variable.
    return time;
  }
  render() {
    return (
      <div id="Clock" className="clock">
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
