import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
import Spinner from "../common/spinner";

const DEFAULT_ERROR_MESSAGE = "There was a problem loading the users";

@connect((store) => {
	return {
		users: store.users.list,
		fetching: store.users.fetching,
		fetched: store.users.fetched,
		error: store.users.error
	}
})
export default class Sidebar extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(getUsers());
	}

	reloadUsers(){
		this.props.dispatch(getUsers());
	}

	renderErrorUserList(error, fetching) {
		let body = null;

		if ( fetching ) {
			body = (
				<Spinner label="Loading Users" show={fetching} ref="spinner"/>
			);
		} else {
			body = (
				<div className="container-options">
					<a
						href="#"
						title="Reload users"
						onClick={this.reloadUsers.bind(this)}
					>
						<i className="material-icons">replay</i>
					</a>
					<div className="users-container-error">
						<p>
							<i className="material-icons">report_problem</i>
						</p>
						<span>
							<b>
								{DEFAULT_ERROR_MESSAGE}
							</b>
						</span>
					</div>
				</div>
			);
		}

		return body;
	}

	renderUserList(fetching) {
		return (
			<div className="users-container">
				<div>
					<Spinner label="Loading Users" show={fetching} ref="spinner"/>
					<div className="mdl-layout-spacer mdl-color--white"></div>
				</div>
				<div className="mdl-layout-spacer"></div>
			</div>
		)
	}

	render(){
		const {users, fetching, fetched, error} = this.props;
		let body = null;

		if ( error ) {
			body = this.renderErrorUserList(error, fetching);
		} else {
			body = this.renderUserList(fetching);
		}

		return (
			<div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 mCustomScrollbar">
				<header className="demo-drawer-header mdl-color--blue-grey-600">
						<img src="../../../../images/logo.png" className="logo-sidebar"/>
						<span className="logo_title">
							 <b>RebelStack Chat</b>
						</span>
				</header>
				<nav className="demo-navigation mdl-navigation mdl-color--blue-grey-900">
					{body}
				</nav>
			</div>
		);
	}
}
