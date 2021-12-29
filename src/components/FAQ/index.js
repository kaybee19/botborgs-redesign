import React from 'react'
import styled from 'styled-components';
import FaqAccordion from './FaqAccordion';
import { bgLight } from '../../assets/images';

const BackG = styled('div')`
	background: linear-gradient(180deg, white -10%, #0d0230 30%);
	padding-bottom: 5rem;
	position: relative;
	overflow: hidden;
	&:after {
		content: '';
		position: absolute;
		background-image: url(${bgLight});
		background-repeat: no-repeat;
		background-size: contain;
		background-position: bottom;
		height: 100%;
		width: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	@media (max-width: 1250px) {
		margin-top: -10%;
	}
`;

const Root = styled('div')`
	max-width: 1100px;
	padding: 10% 2rem 5rem;
	margin: auto;
	position: relative;
	z-index: 2;
`;

const Body = styled('div')`
	max-width: 996px;
	margin: 3rem auto auto;
	background: #4F4185;
`;

export default function FAQ(props) {

	const data = [
		{ q: 'Where will I be able to mint a Borborg?', a: 'We are collaborating with Magic Eden and minting through the launchpad on their website to ensure a bot-free and secure minting experience for our community.' },
		{ q: 'Which wallets are supported for minting and will I be able to mint on mobile?', a: 'We will support Phantom, Solflare, and Sollet wallets. If you want to mint on mobile we recommend Sollet as it is the only wallet on this list that allows minting through mobile.' },
		{ q: 'Where can I read more about the play to earn mechanics and tokenomics of the borgverse and its coin?', a: 'We are currently working on a proper in game economy as well as tokenomics for our token in the Borgverse. We are not rushing this process as tokenomics are a crucial part of the Borgverse.' },
		{ q: 'When do Botborgs release, what is the mint price, and what is the wallet Limit?', a: 'There will be a total of 10,000 Botborgs in the Borgverse. The official release day has not been announced yet. The official mint price has not been finalized. There will be no wallet limit, however it will be 1 per transaction with unlimited transaction.' },
		{ q: 'Will i be able able to see the traits of my botborg in game?', a: 'Yes, we are working on an in game system that will automatically apply the traits of your Botborgs NFT to the 3D full body characters when you connect your wallet.' },
		{ q: 'How can I prevent myself from falling for common scams in the NFT ecosystem?', a: 'To protect yourself from scams we STRONGLY recommend using burner wallets for mints. We also strongly recommend turning off auto-approve for all websites your wallet is connected to, even if they are trusted. Also, this should be a no brainer but NEVER click any links sent to you through DMs or posted in the chat by non-moderators/admins of the discord.' },
		{ q: 'What are the secondary sale royalties?', a: 'Royalties are set at 5%. A percent of these royalties will be deposited into the Borgverse community fund. ALL Botborg ecosystem collections will be contributing directly to this pool of funds which will be used to provide added benefits and rewards to holders.' },
	]

	return (
		<BackG id="faq">
			<Root>
				<p className="textHeader" style={{paddingBottom:0}}>FAQ</p>
				<p className="textSubHeader">frequently asked questions</p>
				<Body>
					{
						data.map((d, i) => (
							<FaqAccordion ques={d.q} ans={d.a} i={i} key={i} in={i === data.length-1 && "in"} />
						))
					}
				</Body>
			</Root>
		</BackG>
	)
}