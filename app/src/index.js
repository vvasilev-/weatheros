/* @flow */

/**
 * The external dependencies.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

/**
 * The internal dependencies.
 */
import store from 'state';
import App from 'components/app';

/**
 * Normalize the browser styles.
 */
injectGlobal`${normalize()}`;

/**
 * Start!
 */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.querySelector('.wrapper'));
