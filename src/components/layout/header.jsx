import React from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import { connect } from "react-redux";
import Auth from '../../auth';
import { setAdminUser } from '../../actions/userActions';


export default class Header extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		}
	}

	logOut(event) {
		event.preventDefault();
		Auth.logout();
	}

	componentWillMount() {
		if ( ! this.props.admin ) {
			const user = Auth.getMe();
			this.props.dispatch(setAdminUser(user));
		}
	}

	displaySettings(event) {
		event.preventDefault();
		document.location.hash = '#/lobby/settings';
	}

	render() {
		let name = 'loading...';
		if ( this.props.admin ) {
			name = this.props.admin.name;
		}
		return (
			<header className="demo-header mdl-layout__header mdl-color--white mdl-color-text--grey-600">

				<div className="mdl-layout__header-row	mdl-color-text--grey-600">
					<span className="mdl-layout-title">
						Welcome { name }
					</span>
					<div className="mdl-layout-spacer"></div>
					<button
						className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
						id="hdrbtn"
						title="settings"
						style={{'marginRight':'10px'}}
						onClick={this.displaySettings.bind(this)}
					>
						<i className="material-icons">settings</i>
					</button>
					<button
						className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"
						id="logoutbtn"
						title="Log out"
						onClick={this.logOut.bind(this)}
					>
						<i className="material-icons">exit_to_app</i>
					</button>
				</div>
			</header>
		);
	}
}
