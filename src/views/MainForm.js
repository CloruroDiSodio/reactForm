import React from 'react'
import {Formik, Form} from 'formik'
import {TextField, FormHelperText, FormGroup, Button, Container, Grid, FormControl, Select, MenuItem, OutlinedInput, InputLabel, FormControlLabel, Checkbox} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Terms from '../components/Terms'

import SignupSchema from '../utils/validationSchema'

import MyInputField from '../components/MyInputField'



const MainForm = () => {

  const [isVisible, setVisibility] = React.useState(false);

  const handleClickShowPassword = () => {
    setVisibility(!isVisible);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return(
  <Container maxWidth="sm" style={{marginTop:'100px'}}>

  <Formik
    initialValues={{
      nome: '',
      cognome:'',
      email:'',
      sesso:'',
      password:'',
      data_nascita:'',
      stato:'',
      prov:'',
      citta:'',
      cap:'',
      cellulare:'',
      newsletter:'',
      terms: false
    }}

    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log(values);
    }}

  >
    {({values, errors, touched, handleChange, handleBlur,
      handleSubmit}) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={6}><MyInputField name={'nome'} label={'Nome'} type={'text'}/></Grid>
              <Grid item xs={6}><MyInputField name={'cognome'} label={'Cognome'} type={'text'}/></Grid>
              <Grid item xs={6}><MyInputField name={'email'} label={'Email'} type={'text'}/></Grid>

              <Grid item xs={6}>
                <FormGroup>
                  <TextField
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    error={typeof errors.password !== 'undefined'}
                    type={isVisible ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {isVisible? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {typeof errors.password !== 'undefined' && <FormHelperText>{errors.password}</FormHelperText>}
                </FormGroup>
              </Grid>

              <Grid item xs={6}>
                <FormControl variant="outlined" style={{width: '100%'}}>
                  <InputLabel ref={inputLabel} htmlFor="sesso">
                    Sesso
                  </InputLabel>
                  <Select
                    style={{width:'100%'}}
                    value={values.sesso}
                    onChange={handleChange}
                    error={typeof errors.sesso !== 'undefined'}
                    input={<OutlinedInput labelWidth={labelWidth} name="sesso" id="sesso" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"M"}>Uomo</MenuItem>
                    <MenuItem value={"D"}>Donna</MenuItem>
                  </Select>

                  {typeof errors.sesso !== 'undefined' && <FormHelperText>{errors.sesso}</FormHelperText>}
                </FormControl>
              </Grid>

            <Grid item xs={6}><MyInputField name={'cellulare'} label={'Cellulare'} type={'text'}/></Grid>

              <Grid item xs={6}>
                <FormControl variant="outlined" style={{width: '100%'}}>
                  <InputLabel ref={inputLabel} htmlFor="stato">
                    Stato
                  </InputLabel>
                  <Select
                    style={{width:'100%'}}
                    value={values.stato}
                    onChange={handleChange}
                    error={typeof errors.stato !== 'undefined'}
                    input={<OutlinedInput labelWidth={labelWidth} name="stato" id="stato" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Italia"}>Italia</MenuItem>
                    <MenuItem value={"Francia"}>Francia</MenuItem>
                  </Select>

                  {typeof errors.stato !== 'undefined' && <FormHelperText>{errors.stato}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl variant="outlined" style={{width: '100%'}} disabled={values.stato !== "Italia"}>
                  <InputLabel ref={inputLabel} htmlFor="prov">
                    Provincia
                  </InputLabel>
                  <Select
                    style={{width:'100%'}}
                    value={values.prov}
                    onChange={handleChange}
                    input={<OutlinedInput labelWidth={labelWidth} name="prov" id="prov" />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"VR"}>Verona</MenuItem>
                    <MenuItem value={"VI"}>Vicenza</MenuItem>
                  </Select>

                </FormControl>
              </Grid>

              <Grid item xs={6}><MyInputField name={'citta'} label={'Città'} type={'text'}/></Grid>
              <Grid item xs={6}><MyInputField name={'cap'} label={'CAP'} type={'text'}/></Grid>
              <Grid item xs={12}><MyInputField name={'data_nascita'} label={''} type={'date'}/></Grid>

              <Grid item xs={12} style={{paddingBottom:'2px'}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.newsletter}
                      color="primary"
                      id="newsletter"
                      name="newsletter"
                    />
                  }
                  label="Vorrei iscrivermi alla newsletter"
                />

              </Grid>


              <Grid item xs={12} style={{paddingBottom:'2px', paddingTop:'2px'}}>
                <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.terms}
                      color="primary"
                      id="terms"
                      name="terms"
                      error={(errors.terms !== false)? 'false' : 'true'}

                    />
                  }
                  label= {
                    <div>Autorizzo il trattamento dei miei dati e accetto i
                      <Terms />
                    </div>
                  }
                />

                {errors.terms === 'Required' && <FormHelperText style={{marginTop:'0', marginBottom:'10px'}}>Please accept term and conditions</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </Form>
    )}

    </Formik>

    </Container>
  )}

export default MainForm