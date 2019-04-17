import React, {Component} from 'react';
import {PageHeader} from "./CoreComponents";
import ApplicationList from "./ApplicationList";
import axios from 'axios';

export default class ApplicationComponent extends Component {
  state = {
    applications: []
  };

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(application) {
    return async () => {
      const response = await fetch(`http://localhost:9000/api/applications/${application._id}`, {
        method: 'delete'
      });
      if (response.status === 204) {
        this.getApplications();
      }
    }
  }

  async getApplications() {
    let response = await fetch('http://localhost:9000/api/applications')

    if (response.status === 200) {
      this.setState({
        applications: await response.json()
      });
    } else {
      console.log("Error Fetching Applications: ", response.data);
    }
  }

  componentWillMount() {
    this.getApplications();
  }

  render() {
    return <div>
      <PageHeader>Applications</PageHeader>
      <ApplicationList
        applications={this.state.applications}
        onDelete={this.onDelete}
      />
    </div>
  }
}


