/* @flow */

/**
 * The typings.
 */
import type { Store, StoreEnhancer, Reducer } from 'redux';

/**
 * The external dependencies.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * The internal dependencies.
 */
import { autoload } from 'common/helpers';
import locations from 'state/locations/reducer';

/**
 * Create the root reducer that will take care
 * to transform the state.
 *
 * @param  {Object} state
 * @return {Object}
 */
const reducer: Reducer = combineReducers({
	locations
});

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
autoload(require.context('./', true, /sagas\.js$/), (path, file) => saga.run(file.default));

export default store;
