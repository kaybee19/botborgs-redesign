import React from 'react'
import styled from 'styled-components';
import { futureVid } from '../../assets/images';

const Root = styled('div')`
  overflow: hidden;
	width: 90%;
	border: 5px solid #36FCFF;
	margin: auto;
  & video {
		display: block;
		width: 100%;
  }
  @media (max-width: 600px) {
		& video {
			height: 650px;
			width: auto!important;
		}
	}
`;

export default class HeroVideo extends React.Component {
	render() {
		return (
			<Root>
				<video autoPlay muted loop>
				  <source src={futureVid} type="video/mp4" />
				</video>
			</Root>
		)
	}
}