import React, {Component} from 'react';
import {LoginForm} from "./LoginForm";
import {connect} from 'react-redux';
import {login} from '../actions/authActions'

class LoginComponent extends Component {
  render() {
    return <div>
      <LoginForm onSubmit={this.props.login}/>
    </div>
  }

}

export default connect(null, {login})(LoginComponent);
