import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";
import Spinner from "../common/spinner";
import ContactLink from "../common/contactLink";

const DEFAULT_ERROR_MESSAGE = "There was a problem loading the users";

@connect((store) => {
	return {
		users: store.users.list,
		error: store.users.error,
		fetching: store.users.fetching,
		fetched: store.users.fetched,
	}
})
export default class Sidebar extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
		this.props.dispatch(getUsers());
	}

	sortUsers(users) {
		const keys = Object.keys(users);
		const usersArr = [];
		keys.forEach( key =>{
			let obj = {
				...users[key],
				id: key
			}
			usersArr.push(obj);
		})
		return Array.prototype.sort.call(usersArr, function(a, b) {
			return new Date(b.lastActivity) - new Date(a.lastActivity);
		});
	}

	reloadUsers() {
		this.props.dispatch(getUsers());
	}

	renderFetching() {
		return (
			<div className="container-options">
				<Spinner
					show= {true}
					label= "Loading users..."
				/>
			</div>
		);
	}


	/**
	 * handleUsersError - Handle de error base on the custom message
	 *
	 * @param  {object} error Error object
	 * @return {string}       Error Message description
	 */
	handleUsersError( error ) {
		let message = null;
		if ( error ) {
			switch (true) {
				case error.message && error.message.length:
					message = error.message;
					break;
				default:
					message = DEFAULT_ERROR_MESSAGE;
			}
		} else {
			message = DEFAULT_ERROR_MESSAGE;
		}
		return message;
	}

	renderError( error ) {
		const message = this.handleUsersError(error);
		return (
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
							{message}
						</b>
					</span>
				</div>
			</div>
		);
	}

	renderFetched( users ) {
		let usersRender = [];
		const usersSorted	= this.sortUsers(users);
		usersSorted.forEach((user, index) =>{
			usersRender.push(
				<ContactLink
					user={user}
					key={user.id}
				/>
			)
		});
		return (
			<div className="users-container">
				<div>
					<div className="mdl-layout-spacer mdl-color--white"></div>
				</div>
				<div className="mdl-layout-spacer"></div>
				{usersRender}
			</div>
		)
	}

	render() {
		const {users, error, fetching, fetched} = this.props;
		let body = null;

		switch (true) {
			case fetching:
				body = this.renderFetching();
				break;
			case error != null:
				body = this.renderError( error );
				break;
			case fetched:
				body = this.renderFetched( users );
				break;
		}

		return (
			<div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50 mCustomScrollbar">
				<header className="demo-drawer-header mdl-color--blue-grey-600">
						<img src="../../../../images/logo.png" className="logo-sidebar"/>
						<span className="logo_title">
							 <b>RebelChat</b>
						</span>
				</header>
				<nav className="demo-navigation mdl-navigation mdl-color--blue-grey-900">
					{body}
				</nav>
			</div>
		);
	}
}
