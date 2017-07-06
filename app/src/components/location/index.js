/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

/**
 * The internal dependencies.
 */
import IconWrapper from 'components/location/icon';
import Temp from 'components/location/temp';
import Meta from 'components/location/meta';
import IconSunBehindCloud from 'components/icon/sun-behind-cloud';

/**
 * Define the styles of the component.
 *
 * @type {Function}
 */
const Card  = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	background: #fff;
	box-shadow: 0 1px 0 ${darken(0.1, '#f6f6f6')};
	border-radius: 2px;
`;

/**
 * Render the location.
 *
 * @param  {Object} props
 * @return {Object}
 */
export default (props: Object): React$Element<any> => (
	<Card>
		<IconWrapper>
			<IconSunBehindCloud width="100" />
		</IconWrapper>

		<Temp temp={32} unit="C" />

		<Meta>
			London, UK
		</Meta>

		<Meta>
			Sunny
		</Meta>
	</Card>
);
