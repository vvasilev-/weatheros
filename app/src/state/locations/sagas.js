/* @flow */

/**
 * The typings.
 */
import type { AxiosXHR } from 'axios';
import type { IOEffect } from 'redux-saga/effects';
import type { LocationRequestAction } from 'weatheros';

/**
 * The external dependencies.
 */
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

/**
 * The internal dependencies.
 */
import {
	getCurrentWeatherByName,
	getCurrentWeatherByCoords
} from 'common/api';
import {
	addLocationRequest,
	addLocationSuccess,
	addLocationFailure
} from 'state/locations/actions';
import {
	LOCATION_BY_NAME,
	LOCATION_BY_COORDS
} from 'state/locations/constants';

/**
 * Start the AJAX request used to retrieve the forecast for the location.
 *
 * @yield  {Object}
 * @return {void}
 */
export function* workerAddLocation(action: LocationRequestAction): Generator<IOEffect, void, any> {
	const { type, descriptor } = action.payload;
	const methods = {
		[LOCATION_BY_NAME]: getCurrentWeatherByName,
		[LOCATION_BY_COORDS]: getCurrentWeatherByCoords
	};

	if (!methods[type]) {
		throw new Error(`Unknown location type - "${type}"`);
	}

	try {
		const { data }: AxiosXHR = yield call(methods[type], descriptor);

		yield put(addLocationSuccess(data));
	} catch (e) {
		yield put(addLocationFailure());
	}
}

/**
 * Start the local workers.
 *
 * @return {void}
 */
export default function* foreman(): Generator<any, void, any> {
	yield [
		takeLatest(addLocationRequest, workerAddLocation)
	];
}
