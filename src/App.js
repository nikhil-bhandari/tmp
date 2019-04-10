import React, {Component} from 'react';
import './App.css';
import {Field, Form} from "react-final-form";
import Wizard from "./Wizard";
import styled, {css} from 'styled-components';

const Input = styled.input`
  display: inline-block;
  width: 50%;
  padding: 10px;
  font-size: 12px;
`;

const Red = styled.span`
  color: #FF0000;
`;

const SuccessPage = styled.div`
  text-align: center;
  padding: 20px;
`;

const PreviewValue = styled.span`
  font-size: 12px;
`;

const FormGroup = styled.div`
   margin-bottom: 20px;
`;

const Select = styled.select`
  display: inline-block;
  width: 50%;
  padding: 10px;
  font-size: 12px;
  height: 40px;
`;

const Label = styled.label`
  font-weight: bold; 
   display: inline-block;
   width: 30%;
   text-align: right;
   padding-right: 20px;
   font-size: 12px;
`;


const Error = ({name}) => (
  <Field
    name={name}
    subscribe={{touched: true, error: true}}
    render={({meta: {touched, error}}) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = value => (value ? undefined : 'Required')

class App extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {};

  async onSubmit(user) {
    const response = await fetch('http://my-json-server.typicode.com/nikhil-bhandari/typicode/applications', user);
    console.log(response);
    if (response.status === 200) {
      return {
        success: true,
        payload: await response.json()
      }
    } else {
      alert('Oops! Some error occured, please try again.');
      return {
        success: false,
        payload: await response.json()
      };
    }
  }

  render() {
    return (
      <div className="App">
        <Wizard onSubmit={this.onSubmit}>
          <Wizard.Page>
            <FormGroup>
              <Label>First Name <Red>*</Red></Label>
              <Field
                name="firstName"
                render={({input, meta}) => {
                  return <Input {...input}/>
                }}
                type="text"
                validate={required}
              />
              <Error name="firstName"/>
            </FormGroup>
            <FormGroup>
              <Label>Last Name <Red>*</Red></Label>
              <Field
                name="lastName"
                render={({input, meta}) =>
                  <Input  {...input}/>
                }
                validate={required}
              />
              <Error name="lastName"/>
            </FormGroup>
            <FormGroup>
              <Label>Occupation <Red>*</Red></Label>
              <Field
                name="occupation"
                render={({input, meta}) =>
                  <Input {...input}/>
                } type="text"
                validate={required}
              />
              <Error name="occupation"/>
            </FormGroup>
          </Wizard.Page>
          <Wizard.Page>
            <FormGroup>
              <Label>Amount <Red>*</Red></Label>
              <Field
                name="amount"
                validate={required}
                render={({input, meta}) =>
                  <Input type="number" {...input}/>
                }
              />
              <Error name="amount"/>
            </FormGroup>
            <FormGroup>
              <Label>Application Type <Red>*</Red></Label>
              <Field name="applicationType"
                     validate={required}
                     render={({input, meta}) => <Select {...input}>
                       <option>Please Select</option>
                       <option value="Mortgage">Mortgage</option>
                       <option value="CarLoan">Car Loan</option>
                       <option value="PersonalLoan">Personal Loan</option>
                     </Select>}>

              </Field>
              <Error name="applicationType"/>
            </FormGroup>
          </Wizard.Page>
          <Wizard.Preview>
            <FormGroup>
              <Label>
                First Name :
              </Label>
              <Field
                name="firstName"
                render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Last Name :
              </Label>
              <Field
                name="lastName"
                render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Occupation :
              </Label>
              <Field
                name="occupation"
                render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Amount :
              </Label>
              <Field
                name="amount"
                render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Application Type :
              </Label>
              <Field
                name="applicationType"
                render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
              />
            </FormGroup>
          </Wizard.Preview>
          <Wizard.Complete>
            <SuccessPage>
              <i className="far fa-check-circle"></i>
              <h1>Success</h1>
              <p>Congrats your application request has been received.</p>
            </SuccessPage>
          </Wizard.Complete>
        </Wizard>
      </div>
    );
  }
}

export default App;
