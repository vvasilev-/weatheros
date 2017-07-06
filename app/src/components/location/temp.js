/* @flow */

/**
 * The external dependencies.
 */
import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

/**
 * Define the styles of the component.
 *
 * @type {Function}
 */
const TempWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    line-height: 1;
`;

/**
 * Define the styles of the component.
 *
 * @type {Function}
 */
const Temp = styled.span`
    font-size: 26px;
    font-weight: 700;
    color: #4f565c;
`;

/**
 * Define the styles of the component.
 *
 * @type {Function}
 */
const TempUnit = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: ${lighten(0.2, '#4f565c')};
    margin-left: 3px;
`;

/**
 * Render the temperature and the unit.
 *
 * @param  {Object} props
 * @param  {Number} props.temp
 * @param  {String} props.unit
 * @return {Object}
 */
export default ({ temp, unit }: Object): React$Element<any> => (
    <TempWrapper>
        <Temp>{temp}&deg;</Temp>
        <TempUnit>{unit}</TempUnit>
    </TempWrapper>
);
