/**
 * The typings.
 */
import type { IconProps } from 'weatheros'

/**
 * The external dependencies.
 */
import React from 'react';

/**
 * The internal dependencies.
 */
import Icon from 'components/icon';

/**
 * Render a plus.
 *
 * @param  {Object} 	   props
 * @return {React.Element}
 */
const Plus = (props: IconProps): React$Element<any> => (
	<Icon {...props} viewBox="0 0 64 64">
		<path d="m46.551,30.119h-12.143v-12.142c0-1.104-0.895-2-2-2s-2,0.896-2,2v12.143h-12.142c-1.105,0-2,0.896-2,2s0.895,2 2,2h12.143v12.143c0,1.104 0.895,2 2,2s2-0.896 2-2v-12.144h12.143c1.105,0 2-0.896 2-2s-0.896-2-2.001-2z" />
		<path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60 C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z" />
	</Icon>
);

export default Plus;
