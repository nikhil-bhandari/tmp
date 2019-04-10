import React, {Component} from 'react';
import './App.css';
import UserLoan from "./components/UserLoan";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <UserLoan/>
      </div>
    );
  }
}

export default App;
