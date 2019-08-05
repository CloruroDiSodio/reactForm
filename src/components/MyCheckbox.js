import {Checkbox, FormControl, FormControlLabel, FormHelperText, TextField} from "@material-ui/core";
import Terms from "./Terms";
import React from "react";
import {connect} from "formik";

const MyCheckbox = props =>
<FormControl>
  <FormControlLabel
    control={
      <Checkbox
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.values[props.name]}
        color="primary"
        id={props.name}
        name={props.name}
        error={(props.formik.errors.nome !== false)? 'false' : 'true'}

      />
    }
    label= {
      <div>Autorizzo il trattamento dei miei dati e accetto i
        <Terms />
      </div>
    }
  />

  {props.formik.errors.nome === 'Required' && <FormHelperText style={{marginTop:'0', marginBottom:'10px'}}>{props.label}</FormHelperText>}
</FormControl>

export default connect(MyCheckbox)