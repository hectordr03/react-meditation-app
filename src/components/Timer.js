import React from 'react';



class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timerIsOn: true,
            minutes: '5',
            seconds: '00',
        }
    }

    render() {
        return (
            <div className='Timer'>
                <h4>How long would you like to meditate for?</h4>

            </div >
        )
    }
}

export default Timer;