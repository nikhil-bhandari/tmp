import axios from 'axios';
import {setAuthorizationToken} from '../utils/auth'

function setCurrentUser(token) {
  setAuthorizationToken(token);
  return {
    type: 'SET_CURRENT_USER',
    payload: {
      token
    }
  };
}




export function login(credentials) {
  return function (dispatch) {
    fetch('http://localhost:9000/auth/local', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials)
    })
      .then((response) => {
        if (response.status === 200) {
          const data = response.json();
          dispatch(setCurrentUser(data.token))
        }
      }, () => {
        console.log('Nay');
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
