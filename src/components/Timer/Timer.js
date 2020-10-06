import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      start: 0,
      seconds: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  // Timer is sourced from "https://medium.com/@650egor/react-30-day-challenge-day-1-simple-timer-df85d0867553"

  // Timer counts just seconds as of now
  // *** Bug: Start button can be pressed multiple times and stacking timer function.
  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          //   time: Date.now() - this.state.start,
          seconds: this.state.seconds + 1,
        }),
      1000
    );
    console.log("start");
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
      seconds: 0,
    });
    console.log("reset");
  };

  // Minute should update every 60 seconds
  render() {
    let second = this.state.seconds;
    let minute = second * 59;
    let time = (
      <p>
        Time: {minute}:{second}
      </p>
    );
    return (
      <div className="Timer">
        <h4>How long would you like to meditate for?</h4>
        {/* <button >+</button> */}
        {time}
        {/* <button >-</button> */}
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
        <button onClick={this.resetTimer}>Reset Timer</button>
      </div>
    );
  }
}

export default Timer;
