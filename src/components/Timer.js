import React from 'react';



class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timerStart: false,
            minutes: 5,
            seconds: 0,
        }
    }

    startTimer() {
        this.setState({
            timerStart: true,
        }, console.log(`State of timer => ${this.state.timerStart}`))
    }

    stopTimer() {
        this.setState({
            timerStart: false,
        }, console.log(`State of timer => ${this.state.timerStart}`))
    }

    addMin() {
        let minCount = this.state.minutes;
        this.setState({
            minutes: minCount + 1,
        })
    }

    minusMin() {
        let minCount = this.state.minutes;
        this.setState({
            minutes: minCount - 1,
        })
    }

    timer() {
        
    }

    render() {
        return (
            <div className='Timer'>
                <h4>How long would you like to meditate for?</h4>
                <button onClick={() => this.addMin()}>+</button>
                <p>Minutes: {this.state.minutes}:{this.state.seconds}</p>
                <button onClick={(() => this.minusMin())}>-</button>
                <button onClick={() => this.startTimer()}>Start Timer</button>
                <button onClick={() => this.stopTimer()}>Stop Timer</button>
            </div >
        )
    }
}

export default Timer;