declare module 'weatheros' {
	declare export type Action = {
		type: string,
		payload?: Object,
		meta?: Object,
		error?: boolean
	};

	declare export type GeolocationResponse = {
		position?: Position,
		error?: PositionError
	};

	declare export type Location = {
		id: string,
		name: string,
		lat: number,
		lng: number
	};

	declare export type LocationRequestType = 'name' | 'coords';
	declare export type LocationRequestDescriptor = string | { lat: number, lon: number };
	declare export type LocationRequestAction = Action & {
		payload: {
			type: LocationRequestType,
			descriptor: LocationRequestDescriptor
		}
	};
}
