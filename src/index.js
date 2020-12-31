import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { restoreSettings } from './utils/settings';
import configureStore from './redux/store';
import { SettingsProvider } from './context/SettingsContext';

const store = configureStore();
const settings = restoreSettings();
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store} id='component-App'>
			<SettingsProvider settings={settings}>
				<App />
			</SettingsProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
