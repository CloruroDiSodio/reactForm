import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignupSchema = Yup.object().shape({
  franco: Yup.string(),
  nome: Yup.string()
    .min(1, "Too Short!")
    .required('Required'),
  cognome: Yup.string()
    .min(1, "Too short!")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  sesso: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Required'),
  data_nascita: Yup.string()
    .required('Required'),
  stato: Yup.string()
    .required('Required'),
  citta: Yup.string()
    .required('Required'),
  cap: Yup.string()
    .required('Required'),
  cellulare: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  terms: Yup.bool()
    .oneOf([true], 'Required')
})

export default SignupSchema
