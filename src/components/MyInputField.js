import {FormGroup, FormHelperText, TextField} from "@material-ui/core";
import React from "react";
import {connect} from "formik";

const MyInputField = props =>
  <FormGroup>
    <TextField
      type = {props.type}
      variant="outlined"
      label={props.label}
      id={props.name}
      name={props.name}
      value={props.formik.values[props.name]}
      onChange={props.formik.handleChange}
      onBlur={props.formik.handleBlur}
      error={typeof props.formik.errors.nome !== 'undefined'}
    />
    {typeof props.formik.errors.nome !== 'undefined' && <FormHelperText>{props.formik.errors.nome}</FormHelperText>}
  </FormGroup>


export default connect(MyInputField)