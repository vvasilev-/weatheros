/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';

/**
 * Render a button.
 *
 * @type {Function}
 */
const Button = styled.button.attrs({
	type: 'button'
})`
	display: inline-block;
	cursor: pointer;
	padding: 0;
	border: 0;
	background: transparent;

	&:focus {
		outline: none;
	}
`;

export default Button;
