import React from 'react';
import styled from 'styled-components';

const CustomH1 = styled.h1`
	text-transform: uppercase;
	color: #2c3e50;
	position: relative;
	padding-bottom: 5px;
	span {
		height: 4px;
		border-radius: 3px;
		background: #e74c3c;
		position: absolute;
		left: 0;
		width: 100px;
	}
`;

const Title = ({ children }) => {
	return (
		<CustomH1>
			<p>{children}</p>
			<span />
		</CustomH1>
	);
};

export default Title;
