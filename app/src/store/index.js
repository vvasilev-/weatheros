/* @flow */

/**
 * The external dependencies.
 */
import { createStore } from 'redux';
import type { Store } from 'redux';

/**
 * Create the root reducer that will take care
 * to transform the state.
 *
 * @param  {Object} state
 * @return {Object}
 */
const reducer: Function = (state: Object): Object => state;

/**
 * Create a Redux store that will keep the state of the app.
 */
const store: Store = createStore(reducer, {});

export default store;
