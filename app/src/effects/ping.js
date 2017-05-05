export default function({ ACTION }) {
	const pong$ = ACTION
		.filter(({ type }) => type === 'PING')
		.mapTo({ type: 'PONG' })
		.debug('ping');

	return {
		ACTION: pong$
	};
};
