import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { loadingAlert, successAlert, errorAlert } from "shared/alerts";
import { SCREENS } from "shared/constants";
import { LoginComponent } from "../components";
import { loginAPI } from "../api";
import { loginAction, fetchUserAction } from "../actions";

class LoginContainer extends Component {
  __redirectTo = (url, state=null) => {
    const { dispatch } = this.props;
    dispatch(push(url, state));
  }

  __submit = async data => {
    const { dispatch } = this.props;
    loadingAlert("Acessando...");

    try {
      const response = await loginAPI(data);
      dispatch(loginAction({ token: response.data.token }));
      dispatch(fetchUserAction({ user: response.data.user }));
      successAlert(`Seja bem-vindo(a) ${response.data.user.email}`);
      this.__redirectTo(SCREENS.PROFILE, { user: response.data.user });
    } catch(error) {
      errorAlert(error);
    }
  }

  render() {
    return (
      <LoginComponent submit={this.__submit} />
    )
  }
}

export default connect()(LoginContainer);
