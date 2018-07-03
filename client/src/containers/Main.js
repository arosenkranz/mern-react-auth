import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";

class Main extends Component {
  state = {
    isLoggedIn: true,
    username: ""
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
  }

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
  }

  render() {
    
    // If user isn't logged in, don't let them see this page
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }

    return (
      <h1>You Made it to the main page {this.state.isLoggedIn.username}!</h1>
    )
  }
}

export default Main;