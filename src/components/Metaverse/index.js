import React from 'react';
import styled from 'styled-components';
import FactoryVideo from './FactoryVideo';
import { twitter, discord, bg5 } from '../../assets/images'

const Root = styled('div')`
	position: relative;
  background: #43326c;
	padding-top: 5rem;
	@media (max-width: 600px) {
		& video {
			height: 500px;
			position: relative;
			right: 75%;
			width: auto!important;
		}
	}
	@media (max-width: 450px) {
		& video {
			right: 135%;
		}
	}
`;

const Background = styled('div')`
	background-image: url(${bg5});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
	left: 0;
	right: 0;
	bottom: 0;
	top: 40px;
  @media (max-width: 1250px) {
  	height: auto;
  }
	@media (max-width: 600px) {
		top: 0;
	}
`;

export default function FactoryVid() {

	return (
		<Root id="metaverse">
			<Background></Background>
			<p className="textHeader">THE BOTBORGS ARE TAKING OVER THE METAVERSE</p>
			<div>
				<FactoryVideo />
			</div>
			<div className="links">
				<a rel="noreferrer" target="_blank" className="linkClass" href="https://discord.com/invite/7vtqB5yshV">
				<div>
					<img src={discord} width="18" alt="twitter-logo" />
					<p className="font-coven" style={{margin:0}}>Join the community</p>
				</div>
				</a>
				<a rel="noreferrer" target="_blank" className="linkClass" href="https://twitter.com/Botborgs">
				<div>
					<img src={twitter} width="18" alt="twitter-logo" />
					<p className="font-coven" >Follow Us</p>
				</div>
				</a>
			</div>
		</Root>
	)
}
