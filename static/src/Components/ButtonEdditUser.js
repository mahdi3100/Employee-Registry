import { Box, Form, Button } from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import React, { useState, lazy, Suspense } from "react";

import { UserContext } from "../Context/AddUserContext.js";
//import Signup from "../Views/Registration/signup";
const Signup = lazy(() => import("../Views/Registration/signup"));


function ButtonEdditUser({ userInfo }) {
    const [showEditUser, setShowEditUser] = useState(false)
    return (
        <>
            <Button.Group style={{ justifyContent: "center" }}>
                <Form.Field style={{ textAlign: "center" }}>

                    <Form.Control>

                        <a className="button is-centered is-danger" href={`/deleteuser?username=${userInfo.username}`}>Delete User</a>

                    </Form.Control>
                    <Form.Control>
                        <a className="button is-centered is-link"
                            onClick={() => setShowEditUser(true)}
                        >
                            Edit User</a>


                    </Form.Control>


                </Form.Field>
            </Button.Group>

            <BoxSignUp showEditBox={showEditUser} infosuser={userInfo} setShowEditUser={() => setShowEditUser(false)} />
        </>
    )


}


function BoxSignUp({ showEditBox, setShowEditUser, infosuser }) {

    const [infoUser, SetInfoUser] = useState([]);

    const UpdateSucceed = (InfoUser) => {


        infosuser = { ...infosuser, ...InfoUser }
        setShowEditUser()

        SetInfoUser(infosuser)
    }
    return (
        <div className={"modal " + (showEditBox ? " is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <Box style={{ width: 400, margin: 'auto' }}>
                    <Suspense fallback={<div className="loader is-centered is-loading" style={{ margin: "20px auto", height: "70px", width: "70px" }}></div>}>
                        <Signup createditUser="update" edituser={infosuser} CreateUpdateSucceed={(newInfoUser) => UpdateSucceed(newInfoUser)} />
                    </Suspense>

                </Box>
                <UserContext.Consumer>
                    {({ /*elementUser,*/ setMyUser }) => (

                        setMyUser(infoUser)
                    )}
                </UserContext.Consumer>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setShowEditUser()}></button>
        </div>

    )

}

export default ButtonEdditUser;