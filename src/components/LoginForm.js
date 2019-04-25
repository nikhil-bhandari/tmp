import React, {Component} from 'react';
import {LoginComponent} from "./LoginComponent";
import {Button, ErrorMessage, FormGroup, Input, Label, Red, PageHeader} from "./CoreComponents";
import {FormattedMessage} from "react-intl";
import {Field, Form} from "react-final-form";
import {required} from "../utils";
import {Error} from "./ErrorComponent";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Form
      validate={this.validate}
      onSubmit={this.props.onSubmit}
      render={({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>
          <PageHeader style={{textAlign: 'center'}}>Login</PageHeader>
          <FormGroup>
            <Label> <FormattedMessage id="username"/> <Red>*</Red></Label>
            <Field
              name="email"
              render={({input, meta}) => {
                return <Input {...input}/>
              }}
              type="text"
              validate={required}
            />
            <ErrorMessage>
              <Error name="password"/>
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label>
              <FormattedMessage id="password"/>
              <Red>*</Red></Label>
            <Field
              name="password"
              render={({input, meta}) =>
              {
                return <Input type="password" {...input}/>}
              }
              type="password"
              validate={required}
            />
            <ErrorMessage>
              <Error name="password"/>
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label/>
            <Button type="submit" primary>
              Submit
            </Button>
          </FormGroup>

        </form>

      }}
    />
  }

}
