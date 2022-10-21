import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { ProfileComponent } from "../components";
import { getLoggedUser } from "shared/utils";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { welcome: "Bem vindo" }
  }

  __redirectTo = (url, state=null) => {
    const { dispatch, user } = this.props;
    dispatch(push(url, { user, ...state }));
  }

  render() {
    return (
      <ProfileComponent
        {...this.props}
        {...this.state}
        redirectTo={this.__redirectTo}
      />
    )
  }
}

const mapStateToProps = state => {
  const user = getLoggedUser(state);
  return { user };
};

export default connect(mapStateToProps)(ProfileContainer);
