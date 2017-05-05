/**
 * The external dependencies.
 */
import { combineCycles } from 'redux-cycles';

/**
 * The internal dependencies.
 */
import ping from 'effects/ping';

export default combineCycles(
	ping
);
