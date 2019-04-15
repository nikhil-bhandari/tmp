import React, {Component} from 'react';
import {PageHeader} from "./CoreComponents";
import ApplicationList from "./ApplicationList";
import axios from 'axios';

export default class ApplicationComponent extends Component {
  state = {
    applications: []
  };

  componentWillMount() {
    axios
      .get('http://localhost:9000/api/applications')
      .then((response) => {
        console.log(response);
        this.setState({
          applications: response.data
        })
      })
      .catch((response) => {
        console.log("Error Fetching Applications: ", response.data);
      })
  }

  render() {
    return <div>
      <PageHeader>Applications</PageHeader>
      <ApplicationList applications={this.state.applications}/>
    </div>
  }
}
