/* @flow */

/**
 * The typings.
 */
import type { Store, StoreEnhancer, Reducer } from 'redux';

/**
 * The external dependencies.
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * The internal dependencies.
 */
import ping from 'effects/ping';

/**
 * Create the root reducer that will take care
 * to transform the state.
 *
 * @param  {Object} state
 * @return {Object}
 */
const reducer: Reducer = (state: Object): Object => state;

/**
 * Create the enhancers that will apply to the store.
 *
 * @type {Function}
 */
const saga: createSagaMiddleware = createSagaMiddleware();
const enhancer: StoreEnhancer = applyMiddleware(saga);

/**
 * Create a Redux store that will keep the state of the app.
 *
 * @type {Object}
 */
const store: Store = createStore(reducer, {}, enhancer);

/**
 * Start the effects.
 */
saga.run(ping);

export default store;
