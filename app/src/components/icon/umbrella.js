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
 * Render an umbrella.
 *
 * @param  {Object} 	   props
 * @return {React.Element}
 */
const Umbrella = (props: IconProps): React$Element<any> => (
	<Icon {...props} viewBox="0 0 52 56">
		<path d="M28,4.09V2a2,2,0,0,0-4,0V4.09A26,26,0,0,0,0,30a2,2,0,0,0,4,0,4,4,0,0,1,8,0,2,2,0,0,0,4,0,4,4,0,0,1,8,0V51a5,5,0,0,0,10,0,2,2,0,0,0-4,0,1,1,0,0,1-2,0V30a4,4,0,0,1,8,0,2,2,0,0,0,4,0,4,4,0,0,1,8,0,2,2,0,0,0,4,0A26,26,0,0,0,28,4.09Z" />
	</Icon>
);

export default Umbrella;
