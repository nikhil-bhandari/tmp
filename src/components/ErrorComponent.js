import {Field} from "react-final-form";
import React from "react";

export const Error = ({name}) => (
  <Field
    name={name}
    subscribe={{touched: true, error: true}}
    render={({meta: {touched, error}}) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);
