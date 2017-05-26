/* @flow */

/**
 * The typings.
 */
import type { Axios, AxiosPromise } from 'axios';

/**
 * The external dependencies.
 */
import axios from 'axios';

/**
 * Setup the HTTP client.
 */
const http: Axios = axios.create({
	baseURL: process.env.OWM_API_BASE || '',
	params: {
		appid: process.env.OWM_API_KEY || '',
		units: process.env.OWM_API_UNITS || ''
	}
});

/**
 * Get the current weather for the location specified in params.
 *
 * @param  {Object}  		 params
 * @return {Promise<Object>}
 */
export function getCurrentWeather(params: Object): AxiosPromise<any> {
	return http.get('/weather', { params });
}

/**
 * Get the current weather by city name.
 *
 * @param  {String}  		 name
 * @return {Promise<Object>}
 */
export function getCurrentWeatherByName(name: string): AxiosPromise<any> {
	return getCurrentWeather({ q: name });
}

/**
 * Get the current weather by geographic coordinates.
 *
 * @param  {Number} 		 lat
 * @param  {Number} 		 lon
 * @return {Promise<Object>}
 */
export function getCurrentWeatherByCoords(lat: number, lon: number): AxiosPromise<any> {
	return getCurrentWeather({ lat, lon });
}
