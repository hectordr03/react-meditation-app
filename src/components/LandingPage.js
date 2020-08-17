import React from 'react';
import axios from 'axios';
import { Box } from "@chakra-ui/core";

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'https://type.fit/api/quotes',
            info: [],
            quote: '',
            author: '',
        }
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(res => {
                let randomNum = Math.ceil(Math.random() * 1643)
                this.setState({
                    info: res.data,
                    quote: res.data[randomNum].text,
                    author: res.data[randomNum].author
                })
                // console.log(randomNum);
                console.log(this.state.info);
                console.log(this.state.quote);
                console.log(this.state.author);
            })
            .catch(err => console.log(err.message))
    }

    render() {
        return (
            <div className="LandingPage">
                <Box className='quote'>
                    <p>"{this.state.quote}"</p>
                    <p>- {this.state.author}</p>
                </Box>
            </div>
        )
    }
}

export default LandingPage;