import React from 'react'
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

const Root = styled('div')`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	display: flex;
	align-items: center;
	padding: 1.5rem 0;
	width: 100%;
	max-width: 1250px;
	justify-content: space-evenly;
	margin: auto;
	position: relative;
	& img, & video {
		width: auto;
		height: 375px;
	}
	& ul {
		margin-top: .5rem;
		padding-left: 1.5rem;
	}
	& li {
    margin-bottom: -2.5px;
	}
	&:nth-of-type(odd) {
		flex-direction: row-reverse;
	}
	@media (max-width: 1100px) {
		align-items: flex-start;
		& img, & video {
			height: 200px;
		}
	}
	@media (max-width: 900px) {
		& img, & video {
			height: 150px;
		}
	}
	@media (max-width: 750px) {
		& img, & video {
			height: 100px;
		}
	}
	@media (max-width: 600px) {
		flex-direction: column!important;
		& img, & video {
			width: 90%;
			height: auto;
			margin: auto;
		}
	}
`;

const Body = styled('div')`
	padding: .5rem 1rem;
	position: relative;
	z-index: -1;
	left: -2.5px;
	background: #332561;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 90%;
	max-width: 525px;
	min-height: 80%;
	.font-coven {
		font-size: 30px;
		margin: 0;
	}
	@media (max-width: 1100px) {
		margin: 0 1rem;
	}
	@media (max-width: 600px) {
		padding: 0;
		left: 0;
		margin: 1rem;
		margin-left: auto;
		margin-right: auto;
		& > div {
			padding: .25rem 2.5% 0rem 5%;
		}
	}
`;

export default function Bots(props) {

	const { img, header, body, list, vid } = props;

	return (
		<Root>
			{ vid ? (
				<video style={{display: 'block'}} autoPlay muted loop>
				  <source src={vid} type="video/mp4" />
				</video>
				) : <img src={img} alt={`${header}-bot`} />
			}
			<Body>
				<div>
					<p className="font-coven">{header}</p>
					<Typography sx={{fontSize: 12.5}} className="font-robot">{body}</Typography>
					<ul>
						{
							list.map((l, i) => (
								<li key={i}><Typography variant="caption" className="font-robot">{l.text}</Typography></li>
							))
						}
					</ul>
				</div>
			</Body>
		</Root>
	)
}
