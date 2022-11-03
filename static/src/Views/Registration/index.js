
import React from "react";
import { Box } from "react-bulma-components";
import 'bulma/css/bulma.min.css';

import Signin from "./signin";
import Signup from "./signup";
class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSignIn: true,
        }

        this.toSignIn = this.toSignIn.bind(this);
    }

    toSignIn() {
  
       this.setState({ showSignIn: !this.state.showSignIn })
    }
    componentDidMount() {
       
        //check component mounted times for Debug purpose
        console.log("check component mounted times for Debug purpose ")
        console.log("in case called Twice that because React.StrictMode in dev mode")
    }

    render() {

        return (
            <>


                <Box style={{ width: 400, margin: 'auto' }}>
                    {
                        (!this.state.showSignIn)
                            ?
                            <Signup onClick={this.toSignIn} />
                            :
                            <Signin onClick={this.toSignIn} />
                    }
                </Box>
            </>
        )
    }

}

export default Registration;