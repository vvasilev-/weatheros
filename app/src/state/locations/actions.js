/* @flow */

/**
 * The typings.
 */
import type { LocationRequestType, LocationRequestDescriptor } from 'weatheros';

/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Start a request to add the specified location.
 *
 * @param  {String} 	   type
 * @param  {String|Object} descriptor
 * @return {Object}
 */
export const addLocationRequest: Function = createAction('locations/add-location-request', (type: LocationRequestType, descriptor: LocationRequestDescriptor) => ({ type, descriptor }));

/**
 * The requested location has been received.
 *
 * @param  {Object} location
 * @return {Object}
 */
export const addLocationSuccess: Function = createAction('locations/add-location-success');

/**
 * The requested location can't be retrieved.
 *
 * @return {Object}
 */
export const addLocationFailure: Function = createAction('locations/add-location-failure');
