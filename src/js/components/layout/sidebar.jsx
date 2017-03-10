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
						<img src="../../../../images/logo.png" className="logo-sidebar"/>
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
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-area-chart fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Analytics
						</a>
						<a className="left-menu-option mdl-navigation__link" href='#'>
							<span className="fa fa-inbox fa-lg" role="presentation"></span>
							&nbsp;&nbsp;&nbsp; Inventory
						</a>
						<div className="mdl-layout-spacer mdl-color--white"></div>
					</div>
					<div className="mdl-layout-spacer"></div>
				</nav>
			</div>
		);
	}
}
