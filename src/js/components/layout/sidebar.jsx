import React from 'react';
import ReactDOM from 'react-dom';

export default class Sidebar extends React.Component {

	constructor (props) {
		super(props);
	}

	render(){
		return (
			<div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 mCustomScrollbar">
				<header className="demo-drawer-header mdl-color--blue-grey-600">
						<img src="../../../../images/logo.png" height="60px" />
						<span className="logo_title">
							 <b>RebelStack Chat</b>
						</span>
				</header>

				<nav className="demo-navigation mdl-navigation mdl-color--blue-grey-900">
					<div>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-video-camera fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Videos
						</a>
						<div className="mdl-layout-spacer mdl-color--white"></div>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-inbox fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Inventory
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-shopping-cart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp;
							Orders
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
					</div>
					<div className="mdl-layout-spacer"></div>
				</nav>
			</div>
		);
	}
}
