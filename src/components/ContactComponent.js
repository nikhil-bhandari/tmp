import React, {Component} from 'react';
import {Button, ButtonSeparator, ErrorMessage, FormGroup, Input, Label, PageHeader, Red} from "./CoreComponents";
import {FormattedMessage} from "react-intl";
import {Field, Form} from "react-final-form";

const Error = ({name}) => (
  <Field
    name={name}
    subscribe={{touched: true, error: true}}
    render={({meta: {touched, error}}) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

class ContactComponent extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <PageHeader>
          Contact Us
        </PageHeader>
        <Form onSubmit={this.onSubmit} render={({handleSubmit}) => {
          return <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label> <FormattedMessage id="contact.name"/> <Red>*</Red></Label>
              <Field
                name="name"
                render={({input, meta}) => {
                  return <Input {...input}/>
                }}
                type="text"
              />
              <ErrorMessage>
                <Error name="name"/>
              </ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label> <FormattedMessage id="contact.subject"/> <Red>*</Red></Label>
              <Field
                name="subject"
                render={({input, meta}) => {
                  return <Input {...input}/>
                }}
                type="text"
              />
              <ErrorMessage>
                <Error name="subject"/>
              </ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label> <FormattedMessage id="contact.message"/> <Red>*</Red></Label>
              <Field style={{width: '50%'}}
                     rows="10"
                     name="message"
                     component="textarea"
                     type="text"
              />
              <ErrorMessage>
                <Error name="subject"/>
              </ErrorMessage>
            </FormGroup>
            <FormGroup>
              <Label></Label>
              <Button primary type="submit">
                Submit
              </Button>
              <ButtonSeparator/>
              <Button>
                Reset
              </Button>
              <ErrorMessage>
                <Error name="subject"/>
              </ErrorMessage>
            </FormGroup>
          </form>
        }}>

        </Form>
      </div>
    );
  }
}


export default ContactComponent;
