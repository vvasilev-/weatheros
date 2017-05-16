/* @flow */

/**
 * The typings.
 */
import type { Reducer  } from 'redux';

/**
 * The external dependencies.
 */
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

/**
 * The internal dependencies.
 */
import {
	findMyLocation,
	findMyLocationSuccess,
	findMyLocationFailure
} from 'state/geolocation/actions';

/**
 * Track the current geolocation.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 *
 * $FlowFixMe
 */
const position: Reducer = handleActions({
	[findMyLocationSuccess]: (state, { payload }): Object => payload
}, {});

/**
 * Track whether a geolocation request is in progress.
 *
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 *
 * $FlowFixMe
 */
const requesting: Reducer = handleActions({
	[findMyLocation]: (): boolean => true,
	[findMyLocationSuccess]: (): boolean => false,
	[findMyLocationFailure]: (): boolean => false
}, false);

export default combineReducers({
	position,
	requesting
});
