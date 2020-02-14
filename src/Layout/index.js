import React from 'react';
import { AvatarWrap, NavBar, NavBarItem, NavBarInner, RouteContent, AvatarImgWrap, NavBarItemText, NameAndCarrierWrap, NameText, CarrierText } from '../Styled';
import { ExperienceIcon, BiographyIcon, ContactMeIcon } from '../Icons';
import { withRouter } from 'react-router-dom';
import { matchPath } from 'react-router';


class Layout extends React.Component {
	render() {
		return (
			<>
				<AvatarWrap>
					<AvatarImgWrap />
					<NameAndCarrierWrap>
						<NameText>
							Armin Yahya
					</NameText>
						<CarrierText>
							Frontend Developer
					</CarrierText>
					</NameAndCarrierWrap>
				</AvatarWrap>
				<NavBar>
					<NavBarInner>
						<NavBarItem to="/ContactMe" className={!!matchPath(this.props.location.pathname, '/ContactMe') ? 'js-active' : ''}>
							<ContactMeIcon />
							<NavBarItemText>Contact Me</NavBarItemText>
						</NavBarItem>
						<NavBarItem to="/Biography" className={!!matchPath(this.props.location.pathname, '/Biography') ? 'js-active' : ''}>
							<BiographyIcon />
							<NavBarItemText>Biography</NavBarItemText>
						</NavBarItem>
						<NavBarItem to="/Experience" className={!!matchPath(this.props.location.pathname, '/Experience') ? 'js-active' : ''}>
							<ExperienceIcon />
							<NavBarItemText>Experience</NavBarItemText>
						</NavBarItem>
					</NavBarInner>
				</NavBar>
				<RouteContent>{this.props.children}</RouteContent>
			</>
		);
	}
}

export default Layout;
