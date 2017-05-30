/* @flow */

/**
 * The typings.
 */
import type { Reducer } from 'redux';
import type { Location } from 'weatheros';

/**
 * The external dependencies.
 */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import {
	addLocationRequest,
	addLocationSuccess,
	addLocationFailure
} from 'state/locations/actions';

/**
 * Track the locations.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 *
 * $FlowFixMe
 */
const all: Reducer = handleActions({
	[addLocationSuccess]: (state, { payload }): Location[] => [...state, payload]
}, []);

/**
 * Track whether a location request is in progress.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 *
 * $FlowFixMe
 */
const requesting: Reducer = handleActions({
	[addLocationRequest]: (): boolean => true,
	[addLocationSuccess]: (): boolean => false,
	[addLocationFailure]: (): boolean => false
}, false);

export default combineReducers({
	all,
	requesting
});
