import React from 'react'
import PropTypes from 'prop-types'
import {Form} from 'react-final-form'
import StepTracker from './StepComponent'
import styled, {css} from 'styled-components';
import {FormattedMessage} from "react-intl";
import {Label} from "./CoreComponents";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: #FF0000;
  padding: 10px 30px;
  text-transform: uppercase;
  border: 2px solid #FF0000;
  width: 100px;
  margin: 0;
  
  ${props => props.primary && css`
    background: #FF0000;
    border: 2px solid #FF0000;
    color: #FFF;
  `};
`;

const ButtonSeparator = styled.span`
  display: inline-block;
  width: 10px;
`;

const Footer = styled.div`
  border-top: 1px solid #FFF4F4;
  position: absolute;
  width: calc( 100% - 40px );
  padding: 20px 0;
  left: 20px;
  right: 20px;
  bottom: 0;
`;

const LeftFooter = styled.div`
  float: left;
`;

const RightFooter = styled.div`
  float: right;
`;


const StyledStepTracker = styled(StepTracker)`
  margin: 0 0 20px 0;
`;
export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  static Page = ({children}) => children;
  static Preview = ({children}) => children;
  static Complete = ({children}) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
      ];
    return activePage.props.validate ? activePage.props.validate(values) : {}
  };

  handleSubmit = async values => {
    const {children, onSubmit} = this.props;
    const {page} = this.state;
    let activePage = React.Children.toArray(children)[page];
    if (activePage.type === Wizard.Preview) {
      console.log('main');
      await onSubmit(values);
      this.next(values)
    } else {
      this.next(values)
    }
  };

  render() {
    const {children} = this.props;
    const {page, values} = this.state;
    let activePage = React.Children.toArray(children)[page];
    console.log(activePage.type === Wizard.Preview);
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <div style={{
        position: 'absolute',
        width: '40%',
        height: '60%',
        border: '1px solid #DDD',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          position: 'relative',
          height: '100%',
          padding: '20px'
        }}>
          <div>
            <StyledStepTracker steps={this.props.children.length} currentIndex={this.state.page}/>
            <Form
              initialValues={values}
              validate={this.validate}
              onSubmit={this.handleSubmit}>
              {(a) => {
                let pageToRender;
                const {handleSubmit, submitting, submitSucceeded, submitFailed} = a;


                if (this.state.complete && submitSucceeded) {
                  pageToRender = this.props.success;
                } else if (this.state.complete && submitFailed) {
                  pageToRender = this.props.error;
                } else {
                  pageToRender = activePage;
                }

                return <form onSubmit={handleSubmit}>
                  {pageToRender}
                  {submitting && (this.props.loader || 'spinner')}


                  <Footer>
                    <LeftFooter>
                      {activePage.type === Wizard.Page && <Button>
                        <FormattedMessage id="cancel"/>
                      </Button>}
                    </LeftFooter>
                    <RightFooter>
                      {(page > 0 && page < this.props.children.length - 1) && (
                        <React.Fragment>
                          <Button type="button" onClick={this.previous}>
                            <FormattedMessage id="back"/>

                          </Button>
                          <ButtonSeparator/>
                        </React.Fragment>
                      )}
                      {activePage.type === Wizard.Page && <Button primary type="submit">
                        <FormattedMessage id="next"/>

                      </Button>}
                      {activePage.type === Wizard.Complete && <Button primary type="submit">
                        <FormattedMessage id="done"/>
                      </Button>}

                      {activePage.type === Wizard.Preview && (
                        <Button primary type="submit" disabled={submitting}>
                          <FormattedMessage id="submit"/>
                        </Button>
                      )}
                    </RightFooter>
                  </Footer>
                </form>

              }}
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
