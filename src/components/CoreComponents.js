import styled, {css} from "styled-components";
import StepTracker from "./StepComponent";
import React from "react";

export const Input = styled.input`
  display: inline-block;
  width: 50%;
  padding: 10px;
  font-size: 12px;
`;

export const Red = styled.span`
  color: #FF0000;
`;

export const FormHeading = styled.h4`
  text-align:center;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled(Red)`
  font-size: 12px;
  line-height: 30px;
  padding-left: 10px;
`;

export const SuccessPage = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

export const PreviewValue = styled.span`
  font-size: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  display: inline-block;
  width: 50%;
  padding: 10px;
  font-size: 12px;
  height: 40px;
`;

export const Label = styled.label`
  font-weight: bold; 
   display: inline-block;
   width: 30%;
   text-align: right;
   padding-right: 20px;
   font-size: 12px;
   line-height: 39px;
`;

export const Icon = styled.i`
   ${props => props.success && css`
    color: #00B383;
  `};
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: #FF0000;
  padding: 10px 30px;
  text-transform: uppercase;
  border: 2px solid #FF0000;
  min-width: 100px;
  margin: 0;
  
  ${props => props.primary && css`
    background: #FF0000;
    border: 2px solid #FF0000;
    color: #FFF;
  `};
`;

export const ButtonSeparator = styled.span`
  display: inline-block;
  width: 10px;
`;

export const Footer = styled.div`
  border-top: 1px solid #FFF4F4;
  position: absolute;
  width: calc( 100% - 40px );
  padding: 20px 0;
  left: 20px;
  right: 20px;
  bottom: 0;
`;

export const LeftFooter = styled.div`
  float: left;
`;

export const RightFooter = styled.div`
  float: right;
`;


export const StyledStepTracker = styled(StepTracker)`
  margin: 0 0 20px 0;
`;


export const ModalWrapper = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  min-height: 500px;
  min-width: 530px;
  border: 1px solid #DDD;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);
  background-color: #FFF;
`;

export const Modal = styled.div`
  position: relative;
  height: 100%;
  padding: 50px;
`;

export const Container = styled.div`
  padding: 25px;
  padding-left: 275px;
  height: 100%; 
  position: relative;
`;

export const ModalBackdrop = styled.div`
    background-color: rgba(255,255,255,0.9);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const PageHeader = styled.h1`
  border-bottom: 1px solid #EEE;
  margin-bottom: 20px;
  padding-bottom: 10px;
`;
