import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import configureStore from './redux/store';

import routes from './routes';
import './App.css';
import Intro from './views/Intro';

const store = configureStore();
const muiBaseTheme = createMuiTheme();

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0074D9'
		},
		secondary: {
			main: '#4caf50'
		}
	},
	overrides: Intro.getTheme(muiBaseTheme)
});

const App = () => {
	return (
		<Provider store={store} id='component-App'>
			<ThemeProvider theme={theme}>
				<Router>{renderRoutes(routes)}</Router>
			</ThemeProvider>
		</Provider>
	);
};

export default App;
