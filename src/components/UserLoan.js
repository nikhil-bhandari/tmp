import React, {Component} from 'react';
import {Field} from "react-final-form";
import Wizard from "./Wizard";
import axios from 'axios';
import {
  ErrorMessage,
  FormGroup,
  Red,
  Input,
  Label,
  FormHeading,
  Icon,
  PreviewValue,
  Select,
  SuccessPage
} from "./CoreComponents";
import {FormattedMessage} from "react-intl";
import {Error} from "./ErrorComponent";

const required = value => (value ? undefined : 'Required');

class UserLoan extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {};

  async onSubmit(user) {
    const response = await fetch('http://localhost:9000/api/applications', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });
    if (response.status === 201) {
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
      <Wizard
        onCancel={this.props.onCancel}
        onSubmit={this.onSubmit}>
        <Wizard.Page>
          <FormHeading>
            <FormattedMessage id="enterDetails"/>
          </FormHeading>
          <FormGroup>
            <Label> <FormattedMessage id="firstName"/> <Red>*</Red></Label>
            <Field
              name="firstName"
              render={({input, meta}) => {
                return <Input {...input}/>
              }}
              type="text"
              validate={required}
            />
            <ErrorMessage>
              <Error name="firstName"/>
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label>
              <FormattedMessage id="lastName"/>
              <Red>*</Red></Label>
            <Field
              name="lastName"
              render={({input, meta}) =>
                <Input  {...input}/>
              }
              validate={required}
            />
            <ErrorMessage>
              <Error name="lastName"/>
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label>
              <FormattedMessage id="occupation"/>
              <Red>*</Red></Label>
            <Field
              name="occupation"
              render={({input, meta}) =>
                <Input {...input}/>
              } type="text"
              validate={required}
            />
            <ErrorMessage>
              <Error name="occupation"/>
            </ErrorMessage>
          </FormGroup>
        </Wizard.Page>
        <Wizard.Page>
          <FormHeading>
            <FormattedMessage id="enterDetails"/>
          </FormHeading>
          <FormGroup>
            <Label><FormattedMessage id="amount"/><Red>*</Red></Label>
            <Field
              name="amount"
              validate={required}
              render={({input, meta}) =>
                <Input type="number" {...input}/>
              }
            />
            <ErrorMessage>
              <Error name="amount"/>
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label><FormattedMessage id="applicationType"/><Red>*</Red></Label>
            <Field name="applicationType"
                   validate={required}
                   render={({input, meta}) => <Select {...input}>
                     <option>Please Select</option>
                     <option value="Mortgage">Mortgage</option>
                     <option value="CarLoan">Car Loan</option>
                     <option value="PersonalLoan">Personal Loan</option>
                   </Select>}>

            </Field>
            <ErrorMessage>
              <Error name="applicationType"/>
            </ErrorMessage>
          </FormGroup>
        </Wizard.Page>
        <Wizard.Preview>
          <FormHeading>
            <FormattedMessage id="enterDetails"/>
          </FormHeading>
          <div>
            <Label>
              <FormattedMessage id="firstName"/> :
            </Label>
            <Field
              name="firstName"
              render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
            />
          </div>
          <div>
            <Label>
              <FormattedMessage id="lastName"/> :
            </Label>
            <Field
              name="lastName"
              render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
            />
          </div>
          <div>
            <Label>
              <FormattedMessage id="occupation"/>:
            </Label>
            <Field
              name="occupation"
              render={({input}) => <span>{input.value}</span>}
            />
          </div>
          <div>
            <Label>
              <FormattedMessage id="amount"/>:
            </Label>
            <Field
              name="amount"
              render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
            />
          </div>
          <div>
            <Label>
              <FormattedMessage id="applicationType"/>:
            </Label>
            <Field
              name="applicationType"
              render={({input}) => <PreviewValue>{input.value}</PreviewValue>}
            />
          </div>
        </Wizard.Preview>
        <Wizard.Complete>
          <SuccessPage>
            <Icon success className="fas fa-5x fa-check-circle"></Icon>
            <h1><FormattedMessage id="success"/></h1>
            <p><FormattedMessage id="success.message"/></p>
          </SuccessPage>
        </Wizard.Complete>
      </Wizard>

    );
  }
}

export default UserLoan;
