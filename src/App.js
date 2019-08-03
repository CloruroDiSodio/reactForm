import React from 'react';
import MainForm from './views/MainForm'
import { ThemeProvider } from '@material-ui/styles';
import theme from './style/muiTheme'

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
     <MainForm />
    </ThemeProvider>
  );
}

export default App;
