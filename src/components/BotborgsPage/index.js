import React from 'react'
import styled from 'styled-components';
import { text } from './text';
import { botImg1, botImg2, botImg3, heroTop, heroBottom } from '../../assets/images'
import botVideo from '../../assets/images/botVideo.mp4'

const Root = styled('div')`
	position: relative;
	padding-top: 7.5%;
	min-height: 200vh;
	background-color: #4d3a8a;
	&:before {
		content: '';
		background-image: url(${heroTop});
		background-position: top;
		background-repeat: no-repeat;
    background-size: contain;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
	}
	&:after {
		content: '';
		background-image: url(${heroBottom});
		background-position: bottom;
		background-repeat: no-repeat;
    background-size: contain;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
	}
`;

const Custom = styled('div')`
	max-width: 965px;
	height: auto;
	border: 2px solid #36FCFF;
	margin: 2rem auto;
	background: black;
	overflow: hidden;
  position: relative;
  z-index: 1;
  & video {
		display: block;
		width: 100%;
  }
	@media (max-width: 1000px) {
		margin: 2rem 1rem;
	}
`;

export default function index() {

	const parser = new DOMParser();

	return (
		<Root id="borgversePage">
			<p className="textHeader">what is the Borgverse?</p>
			<div className="body">
				{
					text.borgverse.map((t, i) => (
						<div key={i}>
							<p className="title">{t.title}</p>
							<div className="text">
								{
									t.text.map((d, i) => (
										<div key={i}>
											<p dangerouslySetInnerHTML={{__html: d.p}} />
										</div>
									))
								}
							</div>
						</div>
					))
				}
			</div>
			<Custom>
				<video controls muted loop>
				  <source src={botVideo} type="video/mp4" />
				</video>
			</Custom>
			<p className="textHeader custom">
				our goals
				<span className="arrow-down"></span>
			</p>
			<div className="body">
				{
					text.goals.map((t, i) => (
						<div key={i}>
							<p className="title goals">{t.title}</p>
							<div className="text goals">
								{
									t.text.map((d, i) => (
										<div key={i}>
											<p dangerouslySetInnerHTML={{__html: d.p}} />
										</div>
									))
								}
							</div>
						</div>
					))
				}
				<div className="imgContainer">
					{
						[botImg1, botImg2, botImg3].map((img) => (
							<img src={img} alt="bot image" className="imgClass" />
						))
					}
				</div>
			</div>
		</Root>
	)
}