/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * The internal dependencies.
 */
import Button from 'components/button';
import IconPlus from 'components/icon/plus';

/**
 * Define the styles of the component.
 * 
 * @type {Function}
 */
const AddLocationButton = Button.extend`
	float: right;
	color: #00498b;
	margin: 12px 12px 0 0;
`;

/**
 * Render the button used to add new locations.
 *
 * @param  {Object} props
 * @return {React.Element}
 */
export default (props): React$Element<any> => (
	<AddLocationButton>
		<IconPlus width={26} />
	</AddLocationButton>
);
