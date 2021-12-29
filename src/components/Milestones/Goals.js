import React from 'react'
import styled from 'styled-components';
import { bullet, next } from '../../assets/images';

const Root = styled('div')`
	height: 280px;
	width: 425px;
	background-size: 100%;
	background-repeat: no-repeat;
	@media (max-width: 1250px) {
		margin: auto;
		margin-bottom: 2rem;
	}	
	@media (max-width: 600px) {
		height: 225px;
		width: 360px;
	}
`;

const Ul = styled('ul')`
	li {
		position: relative;
	}
	li:before {
		position: absolute;
		content: '';
    top: -3px;
    left: -40px;
		background-image: url(${bullet});
    background-size: 50px;
    background-repeat: no-repeat;
    height: 20px;
    width: 50px;
}
	}
`;

export default function Goals(props) {

	const { title, bg, quarter, color } = props.data;

	return (
		<Root style={{backgroundImage: `url(${bg})`}} id="goals">
			<h3 className="font-coven">{title}</h3>
			<Ul>
				{
					quarter.map((q, i) => (
						<li key={i}>
							<span style={{color:color}}>{q.month}</span> - <span>{q.text}</span>
						</li>
					))
				}
			</Ul>
		</Root>
	)
}