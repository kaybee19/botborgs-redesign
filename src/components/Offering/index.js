import React from 'react'
import styled from 'styled-components';
import { theBorborg, botUniverse, theBunkers, offering, bgOffering } from '../../assets/images';
import Bots from './Bots';

const Root = styled('div')`
	background-color: #8113D9;
	padding-top: 7.5rem;
	background-image: url(${bgOffering});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 150vh;
	position: relative;
	margin-top: -2rem;
	padding-bottom: 10rem;
	z-index: -1;
	@media (max-width: 600px) {
		padding-bottom: 3rem;
		padding-top: 5rem;
	}
`;

const Title = styled('div')`
	width: 80%;
	position: relative;
	height: max-content;
	max-width: 525px;
	margin: auto;
	margin-bottom: 3rem;
	padding: 0 1.75rem .75rem;
	text-transform: uppercase;
	font-size: 50px;
	text-align: center;
	&:after {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		background-image: url(${offering});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
	}
	@media (max-width: 700px) {
		font-size: 30px;
		width: 90%;
		padding: .25rem .75rem;
		&:after {
			content: none;
		}
	}
`;

export default function Offering() {

	const data = [
		{
			img: theBorborg, header: 'THE BOTBORGS', body: `The rulers of the Borgverse. Created by a grieving engineer attempting to reincarcerate his long lost wife through artificial intelligence and modern computing. All was going well until the engineer ran his final test: activating the program on a physical robot body that he had constructed. The lifeless robot miraculously sprung into motion and promptly put an end to the engineer's miserable life. Over the next 300 years, Botborgs reproduced and took control of the universe, renaming it to The Borgverse.`,
			list: [
				{ text:'Access to private planets and events in the Borgverse.' },
				{ text:'Access to custom skins on PVP planets + custom in game Botborg.' },
				{ text:'Leveling perks on PVP planets (gain more XP per game than regular players)' },
				{ text:'Fast and FREE travel from planet to planet.' },
				{ text:'Priority access to Borgverse planet auctions, properties, and coin offering.' },
				{ text:'Exclusive airdrops and whitelist collaborations.' },
				{ text:'Governance over the Borgverse and all of its inhabitants.' },
			]
		},
		{
			vid: botUniverse, header: 'PLANET AUCTIONS', body: 'New planets are constantly being built in the Borgverse. Whether it be a PVP shooter, a gallery, a headquarters, an aim trainer, a residential area, a parkour arena, the possibilities are endless. However, planets often appear in the Borgverse completely empty without a structure in site. The bots are looking for rulers to come in and instruct them on what needs to be built on these planets so that they can return to their former glory. The public will be able to bid on planet ownership with construction beginning immediately after a Ruler has been crowned.',
			list: [
				{ text:'Planet auctions will be extremely scarce.' },
				{ text:'The winner of the auction will have the ability to custom build anything (advertising, company/project headquarters, etc) they want on their planet with our art team behind the entire construction process.' },
				{ text:'Full authority over the name of the planet.' },
				{ text:'Ability to decide the location of a planet within Borgverse.' },
				{ text:'Exclusive planet owner discord where owners can speak with each other and the team.' },
			]
		},
		{
			img: theBunkers, header: 'ThE BUNKERS', body: 'These are our highly coveted bunkers. You’ve probably seen them before and you’ll have a chance at getting them in the future. Bunkers will be built on our residential planets which are currently in the works and are expected to be finished at the start of Q2, 2022. ',
			list: [
				{ text:'Private plot of land on public residential planets.' },
				{ text:'Completely customize the inside of your bunker using our 3D asset library. with an easy to use customization tool.' },
				{ text:'Display NFT’s inside of your bunker for others to view.' },
				{ text:'Invite other players to your bunker for private meetings/events.' },
				{ text:'More benefits coming soon . . .' },
			]
		},
	];

	return (
		<Root id="offering">
			<Title className="font-coven">
				The nft offering
			</Title>
				{
					data.map((d, i) => (
						<Bots img={d.img} vid={d.vid} header={d.header} body={d.body} list={d.list} key={i} />
					))
				}
		</Root>
	)
}