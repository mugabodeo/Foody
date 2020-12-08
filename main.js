import React from 'react';  
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { ThemeProvider } from '@material-ui/styles'; 
import theme from './src/theme';
import store from './src/data/store'
import App from './src/app.js';

  
ReactDOM.render( <ThemeProvider theme={theme}> <Provider store={store}> <App /> </Provider> </ThemeProvider> , document.getElementById('app'));  