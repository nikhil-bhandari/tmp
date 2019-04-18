import React, {Component} from 'react';
import {LoginComponent} from "./LoginComponent";
import {Button, ErrorMessage, FormGroup, Input, Label, Red} from "./CoreComponents";
import {FormattedMessage} from "react-intl";
import {Field, Form} from "react-final-form";
import {required} from "../utils";
import {Error} from "./ErrorComponent";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.onSubmit(values.username, values.password)
  }

  render() {
    return <Form
      validate={this.validate}
      onSubmit={this.handleSubmit}
      render={({handleSubmit}) => {
        return <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label> <FormattedMessage id="username"/> <Red>*</Red></Label>
            <Field
              name="username"
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
              {                console.log(input)

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
