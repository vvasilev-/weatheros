/* @flow */

/**
 * The external dependencies.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * The internal dependencies.
 */
import store from 'store';
import App from 'components/app';

/**
 * Start!
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.querySelector('.wrapper'));
