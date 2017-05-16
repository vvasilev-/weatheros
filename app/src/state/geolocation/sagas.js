/* @flow */

/**
 * The typings.
 */
import type { Channel } from 'redux-saga';
import type { IOEffect } from 'redux-saga/effects';
import type { GeolocationResponse } from 'weatheros';

/**
 * The external dependencies.
 */
import { takeLatest } from 'redux-saga';
import { take, call, put } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import { createGeolocationChannel } from 'common/channels';
import {
	findMyLocation,
	findMyLocationSuccess,
	findMyLocationFailure
} from 'state/geolocation/actions';

/**
 * Use the Geolocation API to find the current location of user.
 *
 * @yield  {Object}
 * @return {void}
 */
export function* findMyLocationWorker(): Generator<IOEffect, void, any> {
	const channel: Channel = yield call(createGeolocationChannel);
	const response: GeolocationResponse = yield take(channel);

	if (response.position) {
		const { latitude, longitude } = response.position.coords;

		yield put(findMyLocationSuccess(latitude, longitude));
	}

	if (response.error) {
		const { code, message } = response.error;

		yield put(findMyLocationFailure(code, message));
	}
}

/**
 * Start the local workers.
 *
 * @return {void}
 */
export default function* foreman(): Generator<any, void, any> {
	yield takeLatest(findMyLocation, findMyLocationWorker);
}
