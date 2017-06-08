/**
 * The typings.
 */
import type { IconProps } from 'weatheros';

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Render an icon.
 *
 * @type {Function}
 */
const Icon = styled.span`
	display: inline-block;
	font-size: 0;
	line-height: 0;
	vertical-align: middle;
	width: ${props => props.width ? props.width : 16}px;
	height: ${props => props.height ? `${props.height}px` : 'auto'};
`;

/**
 * Render a SVG element.
 *
 * @param  {Object} 	   props
 * @param  {String} 	   props.viewBox
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
const Svg = ({ viewBox, children }): React$Element<any> => (
	<svg
		fill="currentColor"
		viewBox={viewBox}
		children={children} />
);

export default ({ width, height, viewBox, children }: IconProps): React$Element<any> => (
	<Icon
		width={width}
		height={height}>
			<Svg
				viewBox={viewBox}
				children={children} />
	</Icon>
);
