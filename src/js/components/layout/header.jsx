import React from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';

export default class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<header className="demo-header mdl-layout__header mdl-color--white mdl-color-text--grey-600">
				<div className="mdl-layout__header-row	mdl-color-text--grey-600">
					<span className="mdl-layout-title">
						Welcome Admin
					</span>
					<div className="mdl-layout-spacer"></div>
					<div className="android-navigation-container">
						<a href="#" title="settings">
							<i className="material-icons">settings</i>
						</a>
					</div>
				</div>
			</header>
		);
	}
}
