/* @flow */

/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Request the current location through Geolocation API.
 *
 * @return {Object}
 */
export const findMyLocation: Function = createAction('geolocation/find-my-location');

/**
 * The current location has been received.
 *
 * @param  {Number} lat
 * @param  {Number} lng
 * @return {Object}
 */
export const findMyLocationSuccess: Function = createAction('geolocation/find-my-location-success', (lat, lng) => ({ lat, lng }));

/**
 * The current location can't be retrieved.
 *
 * @param  {Number} code
 * @param  {String} message
 * @return {Object}
 */
export const findMyLocationFailure: Function = createAction('geolocation/find-my-location-failure', (code, message) => ({ code, message }));
