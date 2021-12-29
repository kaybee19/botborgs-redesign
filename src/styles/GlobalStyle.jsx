import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*----------------------------
	xs: 0px
	sm: 600px
	md: 900px
	lg: 1200px
	xl: 1536px
----------------------------*/

/*----------------------------
	Global styles
----------------------------*/

	/*-- Body --*/

	.container {
		padding: 2.5% 4%;
	}
	.linkClass {
		text-decoration: none;
		color: white;
	}

	/*-- Fonts --*/

	.font-robot {
		font-family: 'Robotika'!important;
	}
	.font-space {
		font-family: 'SpaceQuest'!important;
	}
	.font-coven {
		font-family: 'Coven'!important;
	}
	.textColor {
		color: #6E6699;
	}
	.textHeader {
		font-family: 'SpaceQuest'!important;
		font-style: normal;
		font-size: 48px;
		line-height: 57px;
		text-transform: uppercase;
		margin: 0rem;
		padding: 2.5rem 0;
		@media (max-width: 900px) {
			font-size: 28px;
    	line-height: 35px;
		}
	}
	.textSubHeader {
		font-family: 'Robotika'!important;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		text-transform: uppercase;
		@media (max-width: 900px) {
			font-size: 16px;
			line-height: 22px;
		}
	}
	.textSub {
		margin: 0 0 .25rem;
		font-family: 'Coven'!important;
		font-style: normal;
		font-weight: normal;
		font-size: 24px;
		line-height: 150%;
		color: #000000;
	}

// Nav
	.navBody {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding-top: 1rem!important;
	  padding-bottom: 1rem!important;
		& img {
			margin-left: 1rem;
			width: 42px;
		}
	  .nav-link {
	  	img {
		  	height: 24px;
		  	width: auto;
		  	margin-right: 3rem;
		  	margin-left: 0;
		  	cursor: pointer;
	  	}
	  }
		@media (max-width: 1200px) {
			& img { width: 32px; }
		  .nav-link {
		  	img {
			  	height: 18px;
			  	margin-right: 2rem;
		  	}
		  }
		}
		@media (max-width: 900px) {
		  .nav-link {
		  	
		  }
		}
	}

// Botborgs
	#botborgs {
		background-color: #4d3a8a;
		position: relative;
		z-index: 1;
		padding: 125px 0;
		& > div {
			position: relative;
			z-index: 1;
			margin: auto;
		}
	}


// Borgverse
	#borgverse {
		position: relative;
		padding-bottom: 3%;
		& > img {
			width: 100%;
			position: relative;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			top: -110px;
		}
		.text {
			margin: auto;
			padding-top: 2rem;
			width: fit-content;
			text-align: center;
			position: relative;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			.header {
				font-size: 64px;
				margin: 0;
			}
			.subText {
				font-size: 24px;
				text-transform: uppercase;
				padding-bottom: .5rem;
				border-bottom: 7.5px solid white;
				margin-left: auto;
				margin-right: auto;
				margin-bottom: 0;
				width: max-content;
			}
			& > div {
				position: relative;
				top: -5px;
				display: flex;
				width: 100%;
				justify-content: space-evenly;
				.arrow-down {
				  width: 0; 
				  height: 0; 
				  border-left: 20px solid transparent;
				  border-right: 20px solid transparent;	  
				  border-top: 20px solid white;
				}
			}
			.download {
				height: 150px;
				width: auto;
			}
		}
		@media (max-width: 1200px) {
			.text {
				padding-top: 4rem;
				.header { font-size: 34px; }
				.subText { font-size: 20px; }
				.download { height: 100px; margin: 2rem 0; }
			}
		}
		@media (max-width: 900px) {
			.text {
				padding: 5rem 0 4rem;
				.header { font-size: 30px; }
				.subText { font-size: 18px; }
				.download { height: 75px; }
			}
		}
		@media (max-width: 700px) {
			.text {
				padding: 7.5rem 0;
				.subText, .arrow-down { display: none; }
			}
		}
		@media (max-width: 700px) {
			.text {
				.header { font-size: 25px; }
				.download { height: 59px; }
			}
		}
	}
	#gif {
		overflow: hidden;
		.gifRoot {
		  padding: 5rem 0 0;
		  margin: auto;
		  position: relative;
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  & > div:first-of-type {
		    margin-top: -50px;
		  }
		  & img {
		    height: fit-content;
		    width: 750px;
		    @media (max-width: 1450px) {
		      width: 659px;
		    }
		    @media (max-width: 900px) {
		      width: 350px;
		    }
		  }
		  @media (max-width: 1200px) {
		    & img {
		      width: 450px;
		    }
		  }
		  @media (max-width: 900px) {
		    flex-direction: column;
		    & img {
		      width: 450px;
		      margin-left: auto;
		      &:first-of-type {
		        margin-top: 0;
		        margin-right: auto;
		        margin-left: 0;
		        margin-bottom: 3rem;
		      }
		    }
		  }
		  @media (max-width: 600px) {
		    & img {
		      width: 375px;
		    }
		  }
		}
	}
	#learn {
		position: relative;
		height: 500px;
		padding-top: 4rem;
		.learnText {
			z-index: 1;
			.body {
				position: relative;
				z-index: 3;
				padding: 1rem 2rem;
				margin-bottom: 0;
				text-align: center;
				font-weight: bold;
				font-size: 20px;
				line-height: 150%;
				border: 3px solid white;
			}
			.learnLink {
				position: relative;
				z-index: 3;
				font-size: 50px;
				line-height: 150%;
				text-align: center;
				border: 3px solid white;
				margin-bottom: 1.25rem;
				border-top: 0;
				span {
					position: relative;
					margin: 0;
					width: max-content;
					& div:first-of-type {
						left: -50px;
					}
					& div:last-of-type {
						right: -50px;
						transform: rotate(180deg);
					}
					&:hover {
						color: #36FCF5;
						transition. .5s;
					}
				}
				div {
					position: absolute;
					width: 70px;
					height: 35px;
					top: 0;
					bottom: 0;
					margin: auto;
					background-position: left;
					background-size: contain;
					background-repeat: no-repeat;
				}
			}
		}
		@media (max-width: 1300px) {
			.learnText {
				.body { font-size: 18px; }
				.learnLink { font-size: 40px; }
			}
		}
		@media (max-width: 1100px) {
			.learnText {
				.learnLink {
					font-size: 33px;
					div {
						width: 60px;
						height: 30px;
						background-position: center;
					}
				}
			}
		}
		@media (max-width: 900px) {
			.learnText {
				.body { font-size: 16px; }
				.learnLink {
					font-size: 25px;
					div {
						width: 40px;
						height: 20px;
					}
				}
			}
		}
		@media (max-width: 700px) {
			.learnText {
				span {
					div { display: none; }
				}
				.body { font-size: 16px; }
				.learnLink {
					font-size: 25px;
					div {
						width: 40px;
						height: 20px;
					}
				}
			}
		}
		@media (max-width: 600px) {
			height: 450px;
			padding-top: 2rem;
			.learnText {
				.body { font-size: 13px; padding: 1rem; }
				.learnLink { font-size: 20px; }
			}
		}
	}

// Milestones
	#milestones {
		position: relative;
		padding-bottom: 3%;
		.text {
			margin: auto;
			padding-top: 2rem;
			width: fit-content;
			text-align: center;
			position: relative;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			.header {
				font-size: 50px;
				margin: 0;
			}
			.sub {
				color: #36FCF5;
				font-size: 30px;
				margin: 0;
			}
			.goalsContainer {
				display: flex;
				margin-top: 3rem;
		    width: 100vw;
		    justify-content: space-evenly;
			}
		}
		@media(max-width: 1250px) {
			.text {
				.goalsContainer {
					flex-direction: column;
				}
			}
		}
		@media(max-width: 600px) {
			.text {
				.header {
					font-size: 30px;
				}
				.sub {
					font-size: 20px;
				}
			}
		}
	}
	#goals {
		h3 {
			margin: 1.75rem auto 0;
			color: black;
			font-size: 24px;
		}
		ul {
			padding: 0;
			margin: auto;
			width: 63%;
			list-style: none;
			text-align: left;
			li {
				margin-bottom: .33rem;
				padding-right: 1rem;
				color: black;
				text-shadow: -1px 2px 5px rgba(0,0,0,.5);
				span:first-of-type {
					text-transform: capitalize;
				}
			}
		}
		&:last-of-type {
			ul {
				padding-left: 5rem;
			}
		}
		@media(max-width: 600px) {

			ul {
				li {
					font-size: 13px;
				}
			}
			&:last-of-type {
				padding-bottom: 5rem;
			}
		}
	}

// FAQ
	#faq {
		.textHeader {
			text-align: center;
		}
		.textSubHeader {
			text-align: center;
			color: #36FCF5;
		}
	}

// Team
	#team {
		.textHeader {
			padding-top: 2rem;
			padding-bottom: 0;
			text-align: center;
			@media (max-width: 600px) {
				text-align: left;
			}
		}
	}

// Previous Clients
	#clients {
		background-color: #433D68;
		text-align: center;
		.textHeader {
			text-decoration: underline;
		}
		.body {
			background: rgba(22, 19, 38, 0.31);
			display: flex;
			margin: auto;
			justify-content: space-evenly;
			align-items: center;
			flex-wrap: wrap;
			&.img > div {
				max-width: 1200px;
				img {
					margin: 2rem;
					width: auto;
					height: 150px;
				}
			}
			&.card > div {
				max-width: 1400px;
				img {
					margin: 2rem;
					width: auto;
					height: 300px;
				}
			}
		}
		@media (max-width: 1400px) {
			.body {
				&.img > div {
					img {
						height: 100px;
					}
				}
			}
		}
		@media (max-width: 900px) {
			.body {
				&.img > div {
					max-width: 700px;
					img {
						height: 75px;
					}
				}
				&.card > div {
					img {
						height: 200px;
					}
				}
			}
		}
	}

// Metaverse
	#metaverse {
		text-align: center;
		background-color: #43326c;
		position: relative;
		z-index: 1;
		p {
			z-index: 3;
			position: relative;
			margin: 0;
		}
		.links {
			z-index: 3;
			position: relative;
			padding: 2rem 0;
			margin: auto;
			display: flex;
			max-width: 90.5%;
			justify-content: space-between;
			& > a {
				padding: 1rem 2rem;
				width: 45%;
				border: 2px solid #4F4185;
				div {
					display: flex;
					align-items: center;
					img {
						width: 50px;
						height: auto;
						margin-right: 2rem;
					}
					p {
						font-size: 36px;
						margin: 0;
					}
				}
			}
		}
		@media (max-width: 1600px) {
			.links {
				& > a {
					width: 40%;
				}
			}
		}
		@media (max-width: 1300px) {
			.links {
				& > a {
					div {
						img {
							width: 40px;
						}
						p {
							font-size: 22px;
						}
					}
				}
			}
		}
		@media (max-width: 900px) {
			.links {
				flex-direction: column;
				& > a {
					margin: auto;
					margin-bottom: 1rem;
					width: max-content;
					div {
						img {
							width: 30px;
						}
						p {
							font-size: 18px;
						}
					}
				}
			}
		}
	}


// Borgverse Page
	#borgversePage {
		text-transform: uppercase;
		font-size: 18px;
		.textHeader {
			text-align: center;
			position: relative;
			z-index: 5;
			&.custom {
				text-decoration: underline;
				position: relative;
			}
		}
		.body {
			position: relative;
			z-index: 5;
			max-width: 1000px;
			margin: auto;
			& > div {
				margin: 2rem 1rem auto;
				.title {
					font-family: 'SpaceQuest';
					padding: .25rem .5rem;
					background-color: #36FCFF;
					width: max-content;
					color: black;
					font-size: 20px;
					letter-spacing: 2.5px;
					margin: 0;
					&.goals {
						background-color: #EA00EA;
						color: white;
					}
				}
				.text {
					font-family: 'Abel', sans-serif;
					background: rgba(33, 26, 74, 0.5);
					border: 2px solid #36FCFF;
					padding: 0 1rem;
					&.goals {
						border: 2px solid #EA00EA;
						span {
							color: #EA00EA;
						}
					}
				}
			}
		}
		.imgContainer {
			display: flex;
			height: 100%;
			justify-content: space-between;
			margin: 2rem auto;
			padding-bottom: 15%;
			.imgClass {
				border: 2px solid #EA00EA;
				height: 270px;
				width: auto;
			}
		}
		.arrow-down {
		  width: 0; 
		  height: 0; 
		  border-left: 15px solid transparent;
		  border-right: 15px solid transparent;	  
		  border-top: 15px solid white;
	    position: absolute;
	    bottom: -65px;
	    right: 0;
	    left: 0;
	    margin: auto;
	    top: 0;
	    @media (max-width: 900px) {
				border-left: 10px solid transparent;
				border-right: 10px solid transparent;	  
				border-top: 10px solid white;
				bottom: -40px;
	    }
	    @media (max-width: 600px) {
	    	bottom: -120px;
	    }
		}
		span {
			color: #36FCFF;
		}
		@media (max-width: 1000px) {
			.imgContainer {
				.imgClass {
					height: 200px;
				}
			}
		}
		@media (max-width: 750px) {
			.imgContainer {
				flex-direction: column;
				.imgClass {
					height: auto;
					width: 50%;
					min-width: 300px;
					margin: 0 auto 2rem;
				}
			}
		}
		@media (max-width: 600px) {
			font-size: 16px;
			.textHeader {
				padding: 5rem 0 0;
			}
			.body {
				& > div {
					.title {
						font-size: 18px;
					}
				}
			}
		}
	}

`;

export default GlobalStyle;