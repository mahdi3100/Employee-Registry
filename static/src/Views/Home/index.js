import React from "react";
import Employees from "../../Components/Employees";
import 'bulma/css/bulma.min.css';

import { Block, Notification } from "react-bulma-components";
import Toolbar from "../../Components/Toolbar";
import AddLoggedUser from "../../Components/AddLoggedUser";
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetched: false,//check if fetch return
            usersLoading: false,
            usersInfo: [],
            errorFetch: false,
            emptyResault: false,

        }

        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount() {
        //Cacll fetch getUsers once component get mounted 
        (this.state.fetched == false && this.getUsers());



    }

    updateUsers(newUsers) {


        this.setState({ usersInfo: [...newUsers, ...this.state.usersInfo] })
    }
    getUsers() {
        let baseURL = process.env.REACT_APP_API_BASE_URL || 'localhost:8787';
        this.setState({ usersLoading: true });
        fetch("http://" + baseURL + "/users")
            .then(res => res.json())
            .then(res => {
                console.log("RESAULT")
                console.log(res)
                this.setState({ emptyResault: false, usersLoading: false });

                if (res["error"] == 1) { return this.setState({ errorFetch: res["error"] }); }
                if (res.length == 0) { return this.setState({ emptyResault: true }); }
                this.setState({ usersInfo: res, fetched: true });
            }).catch((err) => {
                console.log(err)
                this.setState({ errorFetch: 'Please try again' })
                this.setState({ fetchloader: false });
            });;
    }
    render() {
        return (
            <Block>
                <Toolbar />

                <Block style={{ display: "flex", flexWrap: "wrap", maxWidth: "700px", margin: "auto" }}>
                    {
                        (this.state.usersLoading &&
                            <div className="loader is-centered is-loading" style={{ margin: "20px auto", height: "70px", width: "70px" }}></div>
                        )
                    }
                    {
                        (this.state.errorFetch &&
                            <Notification color="danger">
                                {this.state.errorFetch}
                            </Notification>
                        )
                    }
                    {

                        (!this.state.usersLoading && !this.state.errorFetch &&
                            <>

                                {
                                    (this.state.emptyResault)
                                        ?

                                        <Notification color="danger">
                                            No data to show !
                                            <a onClick={() => { this.getUsers() }}>Reload</a>
                                        </Notification>
                                        :
                                        <>
                                            <AddLoggedUser moreUsers={(users) => { this.updateUsers(users) }} />
                                            <Employees usersInfo={this.state.usersInfo} />
                                        </>
                                }


                            </>
                        )
                    }
                </Block>

            </Block>
        )
    }
}
export default Home;