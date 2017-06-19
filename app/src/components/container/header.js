/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * The internal dependencies.
 */
import Logo from 'components/logo';
import AddLocationButton from 'components/button/add-location';

/**
 * Define the styles of the component.
 *
 * @type {Function}
 */
const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-color: #70bbff;
`;

/**
 * Render the header of the application.
 * 
 * @return {React.Element}
 */
export default (): React$Element<any> => (
	<Header>
		<Logo />
		<AddLocationButton />
	</Header>
);