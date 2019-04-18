import React, {Component} from 'react';
import {LoginForm} from "./LoginForm";
export class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login(username, password) {
    console.log("log", username, password)
    fetch('http://localhost:9000/api/auth/local', {
      method: 'post',
      body: JSON.stringify(username, password)
    })
  }


  render() {
    return <div>
      <LoginForm onSubmit={this.login}/>
    </div>
  }

}
