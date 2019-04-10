import styled, {css} from "styled-components";

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
  padding: 100px 20px;
`;

export const PreviewValue = styled.span`
  font-size: 12px;
`;

export const FormGroup = styled.div`
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
`;

export const Icon = styled.i`
   ${props => props.success && css`
    color: #00B383;
  `};
`;
