import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      start: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  // Timer is sourced from "https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553"
  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1000
    );
    console.log("Timer started");
  };

  stopTimer() {
    clearInterval(this.timer);
    console.log("stop");
  }

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      start: 0,
    });
    console.log("Timer reset");
  };

  render() {
    return (
      <div className="Timer">
        <h4>How long would you like to meditate for?</h4>
        {/* <button >+</button> */}
        <p>Time: {this.state.time}</p>
        {/* <button >-</button> */}
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
        <button onClick={this.resetTimer}>Reset Timer</button>
      </div>
    );
  }
}

export default Timer;
