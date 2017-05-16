/* @flow */

/**
 * The typings.
 */
import type { Channel } from 'redux-saga';

/**
 * The external dependencies.
 */
import { eventChannel, END } from 'redux-saga';

/**
 * Create a new channel that will interact with Geolocation API.
 *
 * @return {Function}
 */
export function createGeolocationChannel(): Channel {
	return eventChannel((emitter: Function): Function => {
		const success: Function = (position) => {
			emitter({ position });
			emitter(END);
		};

		const error: Function = (error) => {
			emitter({ error });
			emitter(END);
		};

		const watcher: Number = navigator.geolocation.getCurrentPosition(success, error);
		const unsubscribe: Function = () => {};

		return unsubscribe;
	});
}
