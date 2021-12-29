import React from 'react'
import styled from 'styled-components';
import { bg1, download, heroWhite } from '../../assets/images';
import BotBorgs from '../../assets/BotBorgs.zip'
import Gif from './Gif';
import Learn from './Learn';

const Root = styled('div')`
  #borgverse:after {
  	position: absolute;
  	content: '';
  	height: 100%;
  	width: 100%;
  	background-image: url(${heroWhite});
  	background-size: cover;
  	background-repeat: no-repeat;
  	background-position: top;
  }
`;

const Background = styled('div')`
	background-image: url(${bg1});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 640px;
	width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: -110px;
	@media (max-width: 600px) {
		height: 550px;
		top: -65px;
	}
`;

export default function Borgverse() {

	return (
		<Root>
			<div id="borgverse">
				<Background></Background>
				<div className="text">
					<p className="header font-space">ENTER THE BORGVERSE</p>
					<p className="subText font-space">fight - explore - compete - discover - connect - all in one place</p>
					<div>
						<span className="arrow-down"></span>
						<span className="arrow-down"></span>
						<span className="arrow-down"></span>
					</div>
					<a href={BotBorgs} download>
						<img src={download} className="download" alt="download" />
					</a>
				</div>
			</div>
			<Gif />
			<Learn />
		</Root>
	)
}