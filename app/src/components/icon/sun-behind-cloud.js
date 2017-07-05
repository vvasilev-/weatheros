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
 * Render a sun behind cloud.
 *
 * @param  {Object} 	   props
 * @return {React.Element}
 */
const SunBehindCloud = (props: IconProps): React$Element<any> => (
	<Icon {...props} viewBox="0 0 67 52">
		<path d="M53.56,32.19A14,14,0,0,0,29.5,18L29,18A16.92,16.92,0,0,0,12.69,30.18,10,10,0,0,0,11,30a11,11,0,0,0,0,22H47a11,11,0,0,0,6.56-19.81ZM41,16a10,10,0,0,1,9,14.42A11,11,0,0,0,47,30a10,10,0,0,0-1.69.18A16.88,16.88,0,0,0,34.1,18.78,10,10,0,0,1,41,16Zm6,32H11a7,7,0,0,1,0-14,7.09,7.09,0,0,1,1.19.16V36a2,2,0,0,0,4,0V32.78a13,13,0,0,1,25.61,0V36a2,2,0,0,0,4,0V34.16A7.16,7.16,0,0,1,47,34a7,7,0,0,1,0,14Z" />
		<path d="M41,8a2,2,0,0,0,2-2V2a2,2,0,0,0-4,0V6A2,2,0,0,0,41,8Z" />
		<path d="M65,24H61a2,2,0,0,0,0,4h4a2,2,0,0,0,0-4Z" />
		<path d="M55.14,13.86a2,2,0,0,0,1.41-.59l2.83-2.83a2,2,0,1,0-2.83-2.83l-2.83,2.83a2,2,0,0,0,1.41,3.41Z" />
		<path d="M25.44,13.27a2,2,0,1,0,2.83-2.83L25.44,7.62a2,2,0,0,0-2.83,2.83Z" />
	</Icon>
);

export default SunBehindCloud;
