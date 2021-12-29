import React from 'react'
import styled from 'styled-components';
import HeroVideo from './HeroVideo';
import { heroTop, heroBottom } from '../../assets/images';

const Root = styled('div')`
	&:before {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url(${heroTop});
		background-position: top;
		background-repeat: no-repeat;
		background-size: contain;
	}
	&:after {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url(${heroBottom});
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export default function Botborgs() {
	return (
		<Root id="botborgs">
			<div>
				<HeroVideo />
			</div>
		</Root>
	)
}