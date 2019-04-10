import React, {Component} from 'react';
import _ from 'lodash';
import styled, {css} from 'styled-components';

const UnorderdList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  background-color: #DDD;
  padding: 5px;
  color: #333;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: 10px;
  font-size: 12px;
  line-height: 17px;
  opacity: 0.5;
  
  ${props => props.active && css`
    color: #FFF;
    background-color: red;
    font-weight: bold;
    opacity: 1;
  `}
`;

class StepComponent extends Component {

  render() {
    const {steps, currentIndex} = this.props;
    return (
      <UnorderdList className={this.props.className}>
        {
          _.times(steps, (step) => {
            return <ListItem active={step === currentIndex} key={step}> {step + 1}</ListItem>;
          })
        }
      </UnorderdList>
    );
  }
}


export default StepComponent;
