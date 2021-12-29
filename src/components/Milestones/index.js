import React from 'react'
import styled from 'styled-components';
import Goals from './Goals';
import { bg3, heroWhite, bgGoals1, bgGoals2, bgGoals3 } from '../../assets/images';

const Background = styled('div')`
	background-image: url(${bg3});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 800px;
	width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: -110px;
  @media (max-width: 1250px) {
  	height: auto;
  }
	@media (max-width: 600px) {
		top: -65px;
	}
`;

export default function Borgverse() {

	const goals = [
		{
			title: 'q3 2021',
			bg: bgGoals1,
			color: '#EA00EA',
			quarter: [
				{ month: 'july', text: 'Continue adding more talent to the team and laying out the base components of each planet.' },
				{ month: 'august', text: 'Continue working on Borgverse structure and planet layouts.' },
				{ month: 'september', text: 'Develop intriguing environments for PVP maps.' },
			]
		},
		{
			title: 'q4 2021',
			bg: bgGoals2,
			color: '#FFFFFF',
			quarter: [
				{ month: 'october', text: 'Launch socials. Full force on developing Hover Borgs PVP planet.' },
				{ month: 'november', text: 'Finish first PVP planet. Continue working on gallery and PVE planets' },
				{ month: 'december', text: 'Release Hover Borgs multiplayer. Continue developing the spaceship system.' },
			]
		},
		{
			title: 'q1 2022',
			bg: bgGoals3,
			color: '#36FCF5',
			quarter: [
				{ month: 'january', text: 'Release Botborgs NFT collection. Show off full body 3D characters in game. Release 3 PVE planets.' },
				{ month: 'february', text: 'Release racing PVP planet. Redesigned spaceships.' },
				{ month: 'march', text: 'Release FPS PVP planet, Coin IDO, release casino planet for gambling.' },
			]
		},
	]

	return (
		<div id="milestones">
			<Background></Background>
			<div className="text">
				<p className="header font-coven">milestones and goals</p>
				<p className="sub font-coven">dive into the Borgverse</p>
				<div className="goalsContainer">
					{
						goals.map((g, i) => (
							<Goals data={g} />
						))
					}
				</div>
			</div>
		</div>
	)
}