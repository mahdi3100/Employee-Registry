import React from "react";
import { Icon, Form, Button } from "react-bulma-components";
import 'bulma/css/bulma.min.css';
import { Icon as Iconify } from '@iconify/react';
import InputForm from "../../Components/InputForm";
//function Signup({ onClick }) {

class Signup extends React.Component {

  /**
   * 
   * @param {*} props
   * edituser from editButton
   * CreateUpdateSucceed 
   * createditUser
   */
  constructor(props) {
    super(props)

    this.state = {
      formerror: "",
      fetchloader: false
    }


    this.form = {
      username: null,
      firstname: null,
      lastname: null,

      password: null,
      email: null,
      address: null,
      role: null
    }
    this.submit = this.submit.bind(this)
  }



  submit() {

    if (this.props.createditUser != "update") {
      for (const [key, value] of Object.entries(this.form)) {
        if (key == "address" || key == "email") continue
        if (value == null) {

          this.setState({ formerror: `Please fill the field ${key}` })

          return;
        }
      }
    }


    let baseURL = process.env.REACT_APP_API_BASE_URL || 'localhost:8787';

    /** 
     * this.props.createditUser == update=> EditUserProfile = username of Prfoile that should be updated
     * this.props.createditUser == create => new profile ; EditUserProfile == null
     * 
     */
    let EditUserProfile = this.props.edituser?.username || null

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: this.form, createditUser: this.props.createditUser, EditUserProfile: EditUserProfile })
    };

    this.setState({ fetchloader: true });

    fetch("http://" + baseURL + "/signup", requestOptions)
      .then(res => res.json())
      .then(res => {
        this.setState({ formerror: '' })

        if (res["error"] == 1) {
          this.setState({ formerror: res["txt"], fetchloader: false })
          return
        }

        //cratedUser with no session
        if (res["error"] == 2) {
          return location.href = res['redirect'];
        }

        if (this.props.createditUser) {

          this.props.CreateUpdateSucceed(res)
          this.setState({ fetchloader: false });

          //if admin edit his own profile
          if (EditUserProfile == localStorage.getItem('username')) {
            localStorage.setItem('username', this.form.username)
          }

        } else {
          localStorage.setItem('username', this.form.username);
          location.href = "/home";

        }


      }).catch((err) => {
        console.log(err)
        this.setState({ formerror: 'Please try again' })
        this.setState({ fetchloader: false });
      });

  }
  render() {
    return (
      <>
        <InputForm getValue={(username) => (this.form = { ...this.form, "username": username })} label="Username" name="username" type="text" placeholder="* Username"  >

          <Icon align="left">
            <Iconify icon="uil:user" />
          </Icon>
        </InputForm>

        <InputForm getValue={(firstname) => (this.form = { ...this.form, "firstname": firstname })} label="First Name" type="text" name="firstname" placeholder="* First Name"  >
          <Icon align="left">
            <Iconify icon="uil:user" />
          </Icon>
        </InputForm>

        <InputForm getValue={(lastname) => (this.form = { ...this.form, "lastname": lastname })} label="Last Name" type="text" name="lastname" placeholder="* Last Name"  >
          <Icon align="left">
            <Iconify icon="uil:user" />
          </Icon>
        </InputForm>

        <InputForm getValue={(password) => (this.form = { ...this.form, "password": password })} label="Password" type="password" name="password" placeholder="* Password" >
          <Icon align="left">
            <Iconify icon="bi:eye-fill" />
          </Icon>
        </InputForm>

        <InputForm getValue={(email) => (this.form = { ...this.form, "email": email })} label="Email" type="email" name="email" placeholder="Email" >
          <Icon align="left">
            <Iconify icon="dashicons:email" />
          </Icon>
        </InputForm>

        <InputForm getValue={(role) => (this.form = { ...this.form, "role": role })} label="Role" type="text" name="role" placeholder="* Role" >
          <Icon align="left">
            <Iconify icon="ic:baseline-work" />
          </Icon>
        </InputForm>

        <InputForm getValue={(address) => (this.form = { ...this.form, "address": address })} label="Address" type="text" name="address" placeholder="Address" >
          <Icon align="left">
            <Iconify icon="entypo:address" />
          </Icon>
        </InputForm>

        <Button.Group>
          <Button
            loading={this.state.fetchloader}
            fullwidth rounded color="primary" onClick={() => this.submit()}>
            {
              (!this.props.createditUser && <span>Register</span> ||
                (
                  (this.props.createditUser == "create" && <span>Create new user</span>)
                  ||
                  (this.props.createditUser == "update" && <span>Update</span>)
                )
              )
            }
          </Button>
        </Button.Group>
        <Form.Help color="danger">{this.state.formerror}</Form.Help>

        {
          (!this.props.createditUser && <Button fullwidth rounded color="link"

            onClick={this.props.onClick}>I already have an account</Button>)
        }

      </>
    )
  }


}

export default Signup;