import React, { Component } from "react";
import { LoginComponent } from "../components";

class LoginContainer extends Component {
  submit = async data => {
    console.log(data);
  }

  render() {
    return (
      <LoginComponent submit={this.submit} />
    )
  }
}

export default LoginContainer;
