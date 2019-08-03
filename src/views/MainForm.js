import React from 'react'
import {Formik, Form} from 'formik'
import {TextField, FormHelperText, FormGroup, Button, Container, Grid, FormControl, Select, MenuItem, OutlinedInput, InputLabel, FormControlLabel, Checkbox} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Terms from '../components/Terms'

import SignupSchema from '../utils/validationSchema'

const MyInputField = props => <FormGroup><TextField
  variant="outlined"
  label={props.name.toUpperCase()}
  id={props.name}
  name={props.name}
  value={props.formik.values[props.name]}
  onChange={props.formik.handleChange}
  onBlur={props.formik.handleBlur}
  error={typeof props.formik.errors.nome !== 'undefined'}
/>
{typeof props.formik.errors.nome !== 'undefined' && <FormHelperText>{props.formik.errors.nome}</FormHelperText>}
</FormGroup>




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
      franco: '',
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
              <Grid item xs={12}>
                <MyInputField name="franco" formik={{values, errors, touched, handleChange, handleBlur,handleSubmit}}/>
              </Grid>
              <Grid item xs={6}>
            <FormGroup>
            <TextField
              variant="outlined"
              label="Nome"
              id="nome"
              name="nome"
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              error={typeof errors.nome !== 'undefined'}
            />
              {typeof errors.nome !== 'undefined' && <FormHelperText>{errors.nome}</FormHelperText>}
            </FormGroup>
              </Grid>

              <Grid item xs={6}>
                <FormGroup>
                  <TextField
                    variant="outlined"
                    label="Cognome"
                    id="cognome"
                    name="cognome"
                    value={values.cognome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={typeof errors.cognome !== 'undefined'}
                  />
                  {typeof errors.cognome !== 'undefined' && <FormHelperText>{errors.cognome}</FormHelperText>}
                </FormGroup>
              </Grid>

              <Grid item xs={6}>
                <FormGroup>
                  <TextField
                    variant="outlined"
                    label="Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={typeof errors.email !== 'undefined'}
                  />
                  {typeof errors.email !== 'undefined' && <FormHelperText>{errors.email}</FormHelperText>}
                </FormGroup>
              </Grid>

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

            <Grid item xs={6}>
              <FormGroup>
              <TextField
                variant="outlined"
                label="Cellulare"
                id="cellulare"
                name="cellulare"
                value={values.cellulare}
                onChange={handleChange}
                onBlur={handleBlur}
                error={typeof errors.cellulare !== 'undefined'}
              />
              {typeof errors.cellulare !== 'undefined' && <FormHelperText>{errors.cellulare}</FormHelperText>}
            </FormGroup>
          </Grid>

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

              <Grid item xs={6}>
                <FormGroup>
                  <TextField
                    variant="outlined"
                    label="Città"
                    id="citta"
                    name="citta"
                    value={values.citta}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={typeof errors.citta !== 'undefined'}
                  />
                  {typeof errors.citta !== 'undefined' && <FormHelperText>{errors.citta}</FormHelperText>}
                </FormGroup>
              </Grid>

              <Grid item xs={6}>
                <FormGroup>
                  <TextField
                    variant="outlined"
                    label="CAP"
                    id="cap"
                    name="cap"
                    value={values.cap}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={typeof errors.cap !== 'undefined'}
                  />
                  {typeof errors.cap !== 'undefined' && <FormHelperText>{errors.cap}</FormHelperText>}
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <TextField
                    type="date"
                    variant="outlined"
                    label=""
                    id="data_nascita"
                    name="data_nascita"
                    value={values.data_nascita}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={typeof errors.data_nascita !== 'undefined'}
                  />
                  {typeof errors.data_nascita !== 'undefined' && <FormHelperText>{errors.data_nascita}</FormHelperText>}
                </FormGroup>
              </Grid>

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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
    )}

    </Formik>

    </Container>
  )}

export default MainForm