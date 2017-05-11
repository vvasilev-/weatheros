declare module 'weatheros' {
	declare export type Location = {
		id: String,
		name: String,
		lat: Number,
		lng: Number
	};

	declare export type LocationsList = Array<Location>;

	declare export type LocationsState = {
		all: LocationsList,
		current: ?string,
		requesting: boolean
	};
}
