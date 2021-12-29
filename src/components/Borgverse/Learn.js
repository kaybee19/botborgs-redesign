import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { bg2, next, learn } from '../../assets/images';

const Background = styled('div')`
	background-image: url(${bg2});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 640px;
	width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: -75px;
  &:after {
  	content: '';
  	position: absolute;
  	height: 50%;
  	width: 100%;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	background-color: #8113D9;
  	z-index: -1;
  }
	@media (max-width: 600px) {
		height: 550px;
		top: -65px;
	}
`;

const LearnText = styled('div')`
	width: 80%;
	position: relative;
	height: max-content;
	max-width: 1269px;
	margin: auto;
	padding: .25rem 1.75rem;
	&:after {
		position: absolute;
		content: '';
		height: 100%;
		width: 100%;
		background-image: url(${learn});
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
		width: 90%;
		padding: .25rem .75rem;
		&:after {
			content: none;
		}
	}
`;

export default function Learn() {

	return (
		<div id="learn">
			<Background></Background>
			<LearnText className="learnText">
				<p className="body">
					The Borgverse is an open world sci-fi themed Metaverse that is built on a multi-planetary system. PLayers are able to travel from planet to planet in their spaceships or through a teleporter. Our goal is to create a large open world hub of games and experiences so that anyone can find something they enjoy.
					<br /><br />
					Galleries, tank battles, Racing games, FPS games, parkour courses, casinos, residential homes. These are just a few examples that you can find while flying through the Borgverse. Strap in and get ready for a crazy ride.
				</p>
				<div className="learnLink font-coven">
					<Link className="linkClass" to="/borgverse">
					<span>
						<div style={{backgroundImage:`url(${next})`}}></div>
						LEARN MORE ABOUT THE BORGVERSE
						<div style={{backgroundImage:`url(${next})`}}></div>
					</span>
					</Link>
				</div>
			</LearnText>
		</div>
	)
}