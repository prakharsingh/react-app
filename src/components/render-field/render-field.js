import React from 'react';
import {
  Select,
  RadioGroup,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText
} from '@material-ui/core';

export const renderTextField = ({
                                  input,
                                  meta: { touched, error },
                                  ...custom
                                }) => (
  <FormControl error={ touched && !!error } fullWidth>
    <TextField
      { ...input }
      { ...custom }
      error={ touched && !!error }
    />
    { touched && error && <FormHelperText>{error}</FormHelperText> }
  </FormControl>
);

export const renderRadioGroup = ({ input, children, ...rest }) => (
  <FormControl>
    <RadioGroup
      { ...input }
      { ...rest }
      value={ input.value }
      onChange={ (event, value) => input.onChange(value) }
    >
      { children }
    </RadioGroup>
  </FormControl>
);

export const renderSelectField = ({
                                    input,
                                    label,
                                    meta: { touched, error },
                                    children,
                                    ...custom
                                  }) => (
  <FormControl error={ touched && !!error } fullWidth>
    <InputLabel>{ label }</InputLabel>
    <Select
      { ...input }
      onChange={ (event) => input.onChange(event.target.value) }
      { ...custom }
    >
      { children }
    </Select>
  </FormControl>
);
