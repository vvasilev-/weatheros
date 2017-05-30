/* @flow */

/**
 * The typings.
 */
import type { Location } from 'weatheros';

/**
 * Get a list of all tracked locations.
 *
 * @param  {Object}   state
 * @return {Object[]}
 */
const getLocations: Function = (state: Object): Location[] => state.locations.all;
