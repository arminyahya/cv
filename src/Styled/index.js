import styled from 'styled-components';
import Timeline from '../pages/Experience/Timeline/desktop';
import HorizontalTimeline from '../pages/Experience/Timeline/mobile';
import Link from "gatsby-link"

export const Body = styled.div`
	width: 100%;
	max-width: 1600px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

export const AvatarWrap = styled.div`
		min-height: 200px;
		margin: 20px 0px;
		margin-bottom: 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
`;

export const AvatarImgWrap = styled.div`
	height: 150px;
	width: 300px;
	border-top-left-radius: 140px;
	border-top-right-radius: 140px;
	background: #9e978e;
	display: inline-block;
	background: url('/images/resume-avatar.jfif');
	background-repeat: no-repeat;
	background-position: left;
	background-size: cover;
`;

export const AvatarInfo = styled.p`
	font-size: 20px;
	color: #fff;
	@media screen and (max-width: 900px) {
		font-size: 18px;
	}
`;
export const NavBar = styled.div`
		display: flex;
		justify-content: center;
		margin: 40p; 0px;
`;

export const NavBarInner = styled.div`
		width: 700px;
		display: flex;
		justify-content: center;

`;
export const NavBarItem = styled(Link)`
		text-decoration: none;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		svg {
				width: 75px;
				height: 92px;
		}
		.svg-point {
				fill: #80808075;
				transition: fill 0.3s ease;
		}

		span {
				color: #80808075;
				transition: color 0.3s ease;
				
		}

		&:hover,&.js-active {
				.svg-point {
						fill:  #FFFFFF;
				}
		
				span {
						color: #FFFFFF;
						
				}
		}

		@media screen and (max-width: 900px) {
		
			svg {
				width: 60px;
				height: 70px;
			}
		}
`;

export const RouteContent = styled.div`
	margin: 200px 50px;
	@media screen and (max-width: 900px) {
		margin: 100px 25px;
	}
`;

export const ExperienceInner = styled.div`
		display: flex;
		flex-direction: row;
		min-height: 800px;

`;

export const MobileExperienceInner = styled.div`
		display: flex;
		flex-direction: column;

`;

export const BiographyRightSide = styled.div`
		display: flex;
		flex-direction: column;

`;
export const BiographyLeftSide = styled.div``;

export const DesktopStyledTimeLine = styled(Timeline)`
&.timeline {
		position: relative;
		max-width: 200px;
	}
	

	/* The actual timeline (the vertical ruler) */
	/* &.timeline::after {
		content: '';
		position: absolute;
		width: 2px;
		background-color: white;
		top: 0;
		bottom: 0;
		left: 50%;
		margin-left: -2px;
	} */
	
	/* Container around content */
	.container {
		padding: 0px 40px;
		position: relative;
		background-color: inherit;
		width: 200px;
		cursor: pointer;
	}
	
	.container::before { 
		content: "";
		display: block;
		width: 0;
		height: 81%;
		border: 1px solid #fff;
		position: absolute;
		top: 29px;
		left: -2px;

	}

	.container::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 25px;
		right: -10px;
		top: 0;
		border-radius: 50%;
		z-index: 1;
		border: 2px solid white;
		z-index: 100
	}
	
	.container.js-active {
		&::after { 
				background-color: #fff;
		}
		.content {
			color: white;
		}
	}

	.left {
		left: 0;
	}
	
	.right {
		left: 50%;
	}

	
	/* Fix the circle for containers on the right side */
	.right::after {
		left: -16px;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		color: #80808075;
		height: 160px;
		.project-name{
				font-size: 18px;
		}

		.project-date {
				font-size: 12px;
		}
	}
	
	@media screen and (max-width: 600px) {
		.timeline::after {
			left: 31px;
		}
		
		.container {
			width: 100%;
			padding-left: 70px;
			padding-right: 25px;
		}
		
		.container::before {
			left: 60px;
			border: medium solid white;
			border-width: 10px 10px 10px 0;
			border-color: transparent white transparent transparent;
		}
	
		.left::after, .right::after {
			left: 15px;
		}
		
		.right {
			left: 0%;
		}

`;

export const MobileStyledTimeLine = styled(HorizontalTimeline)`

.timeline {
	margin: 20px 0;
	list-style-type: none;
	display: flex;
	padding: 0;
	text-align: center;
	-webkit-tap-highlight-color: transparent;
}
.timeline li {
	transition: all 200ms ease-in;
}
.timestamp {
	margin-bottom: 20px;
	padding: 0px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 100; 
	font-size: 14px;
	padding-top: 20px;
	color: rgba(128, 128, 128, 0.46);
}
.status {
	padding: 0px 40px;
	display: flex;
	justify-content: center;
	/* border-top: 2px solid #fff; */
	position: relative;
	transition: all 200ms ease-in ;
}
	
.status span {
	font-size: 14px;
	padding-top: 20px;
	color: rgba(128, 128, 128, 0.46);
}

.status span:before {
	content: '';
	width: 20px;
	height: 20px;
	/* background-color: #fff; */
	border-radius: 20px;
	border: 3px solid #fff;
	position: absolute;
	top: -15px;
	left: 42%;
	transition: all 200ms ease-in;
}

.swiper-control {
	text-align: right;
}

.swiper-container {
	height: 200px;
	margin: 20px auto;
	overflow: hidden;
	padding: 0 20px 30px 20px;
	max-width: 400px;
	overflow-x: scroll;
	
	.timeline-divider {
		position: absolute;
    background-color: #fff;
    width: 178px;
    top: 55px;
    height: 2px;
    margin-left: 8px;
	}
	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
	 
	&::-webkit-scrollbar-track {

	}
	 
	&::-webkit-scrollbar-thumb {
		background: rgb(150, 148, 148); 
		border-radius: 20px;

	}
}
}
.swiper-slide {
	width: 200px;
	text-align: center;
	font-size: 18px;
	min-width: 200px;
	text-align: center;
	cursor: pointer;
	&.js-active {
		.status span,.timestamp {
			color: #fff;
		}

		.status span:before {
			background-color: #fff;

		}
	}
}

`;

export const LaptopSliderInner = styled.div`
		position: relative;
		width: 50%;
		float: right;
		background: url('images/mockup-macbook-pro-2017-bw.png');
		background-repeat: no-repeat;
		background-position: top left;
		background-size: contain;
		width: 1000px;
		height: 600px;
		z-index: 4;
`;

export const MobileLaptopSliderInner = styled.div`
		position: relative;
		width: 325px;
		margin: 0px auto;
		float: right;
		background: url('images/mockup-macbook-pro-2017-bw.png');
		background-repeat: no-repeat;
		background-position: top left;
		background-size: contain;
		height: 300px;
		z-index: 4;
`

export const LaptopSliderWrap = styled.div`
		display:flex;
		flex-direction: column;
		flex: 3;
		align-items: flex-end;
`;

export const LaptopScreen = styled.div`
	margin: 67px 167px;
	width: 570px;
	height: 390px;
	overflow: hidden;
	position: relative;
	background-color: #fff;
`;

export const LaptopAppShot = styled.img`
	width: 64%;
	height: 407px;
	position: absolute;
	z-index: -1;
	margin-left: auto;
	margin-right: auto;
	display: block;
	left: 182px;
	object-fit: contain;
	top: 29px;
	opacity: 0;
	-webkit-transition: opacity 0.4s ease;
		
	&.lazy-image {
		opacity: 0;
	}

	&.loaded {
		opacity: 1;
	}

	transition: opacity 1s ease;
`;


export const MobileLaptopAppShot = styled.img`
	width: 64%;
	height: 132px;
	position: absolute;
	z-index: -1;
	margin-left: auto;
	margin-right: auto;
	display: block;
	left: 58px;
	object-fit: contain;
	top: 10px;
	opacity: 0;
	&.lazy-image {
		opacity: 0;
	}

	&.loaded {
		opacity: 1;
	}
	transition: opacity 0.7s ease;
	
`;

export const Dot = styled.span`
	cursor: pointer;
	height: 10px;
	width: 10px;
	margin: 0 4px;
	background-color: #bbb;
	border: 3px solid #bbb;
	
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
	&.js-active {
		border: 3px solid #bbb;
		background-color: #fff;

	}
`;

export const ProjectInfo = styled.div`
	margin-top: 0px;
	display: flex;
	flex-direction: row;

`;

export const ProjectInfoItem = styled.div`
	flex: 1;
`;

export const ProjectInfoItemTitle = styled.div`
	flex: 1;
	color: #fff;
	font-size: 18px;
	@media screen and (max-width: 900px) {
		font-size: 16px;
	}
`;

export const ProjectInfoItemHead = styled.div`
	flex: 1;
	color: #fff;
	font-size: 20px;
	@media screen and (max-width: 900px) {
		font-size: 18px;
	}
`;



export const ProjectInfoItemContent = styled.div`
	font-size: 14px;
	color: #fff;
	opacity: 0.5;
	line-height: 4;
	@media screen and (max-width: 900px) {
		font-size: 14px;
	}
`;

export const BiographyInner = styled.div`
	display: flex;
	flex-direction: column;
`;

export const BiographyInfo = styled.div`
	display: flex;
	margin: 0px auto;
	flex-direction: column;
	align-items: center;
	width: 50%;
	@media screen and (max-width: 900px) {
		width: 100%;
	}
		`;

export const BiographyInfoItem = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding: 20px 0px;
	width: 100%;
	@media screen and (max-width: 900px) {
		font-size: 12px;
	}
`;

export const BiographyInfoItemTitle = styled.div`
		display: inline-block;
		padding: 0px 20px;
		color: #fff;
`;

export const BiographyInfoLine = styled.div`
	flex: 3;
	display: inline-block;
	height: 2px;
	min-width: 50px;
	background-color: #fff;
`;

export const BiographyInfoItemContent = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	padding: 0px 20px;
	color: #fff;
`;
export const BiographySkillsWrap = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

export const BiographySkill = styled.div`
	marginTop: 30px;
	min-width: 25%;
	margin: 10px;
	 display: flex;
		flex-direction: column;
		 align-items: center;
	.CircularProgressbar .CircularProgressbar-path {
		stroke: #E94541;
	}

	.icon svg {
		width: 50px;
		height: 50px;
	}
	.svg-point {
		fill: #fff;
	}
`;
export const FlexRow = styled.div`
	display: flex;
`;
export const FlexOne = styled.div`
	flex: 1;
`;

export const ContactMeInner = styled.div`
	display: flex;
	flex-direction: column;
	
	
`;
export const SocialMediaArea = styled.div`
display: flex;
 justify-content: center;
 margin-top: 80px;
`;

export const SocialMediaAreaInner = styled.div`
display: flex;
.icon {
	flex: 1;
	padding: 0px 40px;
 
}

svg {
	width: 100px;
	height: 100px;
	&:hover{
		.svg-point {
			fill: #F6F6F6;
			opacity: 0.8;
		}
	}
}

.svg-point {
	fill: #F6F6F6;
	opacity: 0.4;
}

@media screen and (max-width: 900px) {
	.icon {
		flex: 1;
		padding: 0px 10px;
	 
	}
	svg {
		width: 50px;
		height: 50px;
	}
}

`;

export const NavBarItemText = styled.span`
	padding-top: 20px;
`;


export const SliderModalInner = styled.div`
	display: flex;
	flex-direction: column;
`

export const SliderModalImageWrap = styled.div`
	background-color: #f4f5f7;
	border-radius: 2px;
	margin: 48px 0 80px;
	overflow: hidden;
	position: relative;
	width: 914px;
	height: 579px;
	z-index: 2000;
	@media screen and (max-width: 1200px) {
		width: 338.5px;
		height: 210.5px;
	}
`

export const SliderModalShot = styled.img`
	display: block;
`;

export const SliderModalDotsWrap = styled.div`
	display: flex;
	justify-content: center;

`

export const SliderModalDot = styled.div`
	cursor: pointer;
	height: 10px;
	width: 10px;
	margin: 0 2px;
	background-color: #bbb;
	border: 3px solid #bbb;

	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
	&.js-active {
		border: 3px solid #bbb;
		background-color: #fff;
	}
`

export const TimeLineHead = styled.div`
	text-align: center;
	margin-bottom: 40px;
	color: #fff;
	font-size: 22px;
`;

export const TimeLineRoad = styled.div`
	position: relative;
	flex: 1;
`;

export const NameAndCarrierWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 300px;
	margin-top: 20px;
`

export const NameText = styled.div`
	color: #fff;
`

export const CarrierText = styled.div`
	color: #fff;
	margin-top: 10px;
`