import React, { Component } from "react";
import { LoginComponent } from "../Components/login";

class LoginContainer extends Component {
    redirectTo = (url, state=null) => {
        console.log("Redirecionado!");
    }

    submit = async data => {
        console.log(data);
    }

    render() {
        return (
            <LoginComponent
                submit={this.submit}
                redirectTo={this.redirectTo}
            />
        )
    }
}

export default LoginContainer;
