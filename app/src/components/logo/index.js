/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * The internal dependencies.
 */
import IconSunBehindCloud from 'components/icon/sun-behind-cloud';

/**
 * Render the link.
 *
 * @type {Function}
 */
const Link = styled.a`
	float: left;
	font-weight: 700;
	text-decoration: none;
	color: #00498b;
	margin: 8px 0 0 12px;
`;

/**
 * Render the text inside the logo.
 *
 * @type {Function}
 */
const Text = styled.span`
	display: inline-block;
	vertical-align: top;
	font-size: 16px;
	color: #fff;
	margin: 9px 0 0 10px;
`;

/**
 * Render the logo.
 *
 * @return {React.Element}
 */
export default (): React$Element<any> => (
	<Link>
		<IconSunBehindCloud width="39" />

		<Text>Weatheros</Text>
	</Link>
);
