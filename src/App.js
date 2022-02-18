import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import './App.css';
// import Intro from './views/Intro';
import useSettings from './theme/hooks/useSettings';
import { createTheme } from './theme';
import Toggle from './components/Toggler';

const App = () => {
	const { settings } = useSettings();
	return (
		<ThemeProvider theme={createTheme(settings)}>
			<Router>{renderRoutes(routes)}</Router>
			<Toggle />
		</ThemeProvider>
	);
};

export default App;
