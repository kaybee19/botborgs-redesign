import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll'
import { nav, nav1, nav2, nav3, nav4, nav5, nav1Color, nav2Color, nav3Color, nav4Color, nav5Color } from '../../assets/images';
import { medium, twitter, discord } from '../../assets/images/logos';

// Material UI
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const Root = styled('div')`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 2;
	background-image: url(${nav});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 105px;
  @media (max-width: 900px) {
  	height: 75px;
  }
`;

const Logo = styled('img')`
	width: 260px;
	height: auto;
	@media (max-width: 900px) {
		width: 200px;
	}
	@media (max-width: 600px) {
		width: 150px;
	}
`;

const MobileNav = styled('div')`
	background: #1B115A;
	min-height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.nav-link {
		cursor: pointer;
	}
	& img {
		height: 24px;
		margin: 1rem .5rem;
	}
	& > div {
		img {
			height: 40px;
			margin-top: 25%;
		}
	}
	@media (min-width: 500px) {
		padding: 10% 0;
	}
`;

const Close = styled('span')`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 1rem;
	font-size: 3rem;
	cursor: pointer;
	color: white;
`;

export default function Navbar() {

	// Page Width
	const [width, setwidth] = React.useState(window.innerWidth);
  const [nav, setNav] = React.useState(false);
  const [mouse, setMouse] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener('resize', (x) => setwidth(x.target.innerWidth));
		width > 900 && setNav(false);
	},[width]);

  // Drawer & navbar onclick handler
  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNav(!nav);
  };

  const handleClick = () => {
		if (location.pathname !== '/') {
		  navigate("/");
		}
	  nav && toggleDrawer();
  }

  const [img, setImg] = React.useState({
		1: nav1,
		2: nav2,
		3: nav3,
		4: nav4,
		5: nav5,
	});

	const navLink	= [
		{ id: 1,  img: nav1, color: nav1Color, link: 'botborgs', width: 187, minWidth: 140 },
		{ id: 2,  img: nav2, color: nav2Color, link: 'borgverse', width: 203, minWidth: 152.5 },
		{ id: 3,  img: nav3, color: nav3Color, link: 'offering', width: 87, minWidth: 65.5 },
		{ id: 4,  img: nav4, color: nav4Color, link: 'faq', width: 63, minWidth: 48 },
		{ id: 5,  img: nav5, color: nav5Color, link: 'team', width: 95, minWidth: 72 },
	];

	const toggleImg = (x, y) => {
		let newImg;
		newImg = {
			...img,
			[y]: x
		}
		console.log(newImg)
		setImg(newImg);
	};

	const NavMarkup = (props) => (
		navLink.map((nav, i) => (
			<ScrollLink key={i} onClick={props.click} className='nav-link' to={nav.link} spy={true} smooth={true}>
				<img src={img[nav.id]} style={{minWidth: width > 1200 ? nav.width : nav.minWidth}} onMouseEnter={() => toggleImg(nav.color, nav.id)} onMouseLeave={() => toggleImg(nav.img, nav.id)}  alt={nav.link}  />
			</ScrollLink>
		))
	);

	const iconMarkup = (
		<React.Fragment>
			<a href="https://discord.com/invite/7vtqB5yshV" target="_blank">
				<img src={discord} alt="discord" />
			</a>
			<a href="https://twitter.com/Botborgs" target="_blank">
				<img src={twitter} alt="twitter" />
			</a>
			<a href="https://medium.com/@botborgs" target="_blank">
				<img src={medium} alt="medium" />
			</a>
		</React.Fragment>
	);

  // Mobile items
  const Items = (
  	<MobileNav>
  		<Close onClick={toggleDrawer}>&times;</Close>
    	<NavMarkup click={handleClick} />
    	<br />
    	<div>{iconMarkup}</div>
  	</MobileNav>
	);

	let location = useLocation();
	let navigate = useNavigate();

	return (
		<Root>
			<div className="navBody container">
				<div>
					{ width > 900 ? <NavMarkup click={handleClick} /> : <Link className='nav-link' to='/'><img src={nav1} alt="botborgs" /></Link> }
				</div>
				<div>
					{
						width > 900 ? iconMarkup : (
						<div>
							<MenuIcon onClick={toggleDrawer} sx={{color:'white',cursor:'pointer'}} />
			        <Drawer anchor='right' open={nav} onClose={toggleDrawer}>
			          {Items}
			        </Drawer>
						</div>
					)}
				</div>
			</div>
		</Root>
	)
};
