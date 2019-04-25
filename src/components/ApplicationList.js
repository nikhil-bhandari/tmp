import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from "./CoreComponents";

const Table = styled.table`
  width: 100%;
  thead {
    tr {
      th {
        text-align: left;
        &.center {
         text-align: center;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 5px;
        &.center {
         text-align: center;
        }      
      }
    }
  }
  
  button {
    font-size: 16px;
    padding: 5px 7px;
    min-width: auto;
  }
`;

export default class ApplicationList extends Component {

  render() {
    const applications = this.props.applications || [];
    return <div>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>ApplicationType</th>
          <th className={"center"}>Operations</th>
        </tr>
        </thead>
        <tbody>
        {
          applications.map((application, index) => <tr key={application._id}>
            <td>{
              index + 1
            }</td>
            <td>
              {`${application.firstName} ${application.lastName}`}
            </td>
            <td>
              {
                application.applicationType
              }
            </td>
            <td className={"center"}>
              <Button primary onClick={this.props.onDelete(application)}>
                <i className="fa fa-trash"></i>
              </Button>
            </td>
          </tr>)
        }

        </tbody>
      </Table>
    </div>
  }
}
