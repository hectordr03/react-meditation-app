import React from 'react';

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url: '',
            quote: '',
        }
    }

    
    render() {
        return (
            <div className="LandingPage">
                <h3>This is the landing page</h3>
            </div>
        )
    }
}

export default LandingPage;