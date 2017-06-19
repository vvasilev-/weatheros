/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * The internal dependencies.
 */
import Header from 'components/container/header';

/**
 * Define the styles of the component.
 * 
 * @type {Function}
 */
const App = styled.div`
	min-height: 100vh;
`;

/**
 * Render the application.
 *
 * @return {React.Element}
 */
export default (): React$Element<any> => (
	<App>
		<Header />
	</App>
);
