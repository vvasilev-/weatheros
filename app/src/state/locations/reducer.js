/* @flow */

/**
 * The typings.
 */
import type { LocationsState  } from 'weatheros';

/**
 * The external dependencies.
 */
import { handleActions } from 'redux-actions';

/**
 * Prepare the default state for this reducer.
 */
const state: LocationsState = {
	all: [],
	current: null,
	requesting: false
};

export default handleActions({}, state);
