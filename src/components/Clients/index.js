import React from 'react'
import styled from 'styled-components';
import { bgLightTop } from '../../assets/images';
import { battle, crash, diablo, tencentgame, blizzard, easports, netease, igg } from '../../assets/images/logos';

const Root = styled('div')`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		background-image: url(${bgLightTop});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top;
		height: 100%;
		width: 100%;
    top: -50px;
		bottom: 0;
		left: 0;
		right: 0;
		@media (max-width: 900px) {
			top: -30px;
		}
	}
`;

export default function index() {

	const imgs = [
		{ img: tencentgame },
		{ img: blizzard },
		{ img: easports },
		{ img: netease },
		{ img: igg },
	];

	const cards = [
		{ card: battle, },
		{ card: crash },
		{ card: diablo },
	];

	return (
		<Root id="clients">
			<p className="textHeader">previous clients</p>
			<div className="body img">
				<div>
					{
						imgs.map((m, i) => <img key={i} src={m.img} alt="client" /> )
					}
				</div>
			</div>
			<p className="textHeader">Latest projects</p>
			<div className="body card">
				<div>
					{
						cards.map((m, i) => <img key={i} src={m.card} alt="client" /> )
					}
				</div>
			</div>
		</Root>
	)
}