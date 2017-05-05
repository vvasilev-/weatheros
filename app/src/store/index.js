/* @flow */

/**
 * The typings.
 */
import type { Store } from 'redux';

/**
 * The external dependencies.
 */
import { createStore, applyMiddleware } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';

/**
 * The internal dependencies.
 */
import effects from 'effects';

/**
 * Create the root reducer that will take care
 * to transform the state.
 *
 * @param  {Object} state
 * @return {Object}
 */
const reducer: Function = (state: Object): Object => state;

/**
 * Create the enhancers that will apply to the store.
 *
 * @type {Function}
 */
const cycle: Function = createCycleMiddleware();
const enhancer: Function = applyMiddleware(cycle);

/**
 * Create a Redux store that will keep the state of the app.
 *
 * @type {Object}
 */
const store: Store = createStore(reducer, {}, enhancer);

/**
 * Start the side effects.
 */
run(effects, {
	ACTION: cycle.makeActionDriver()
});

export default store;
