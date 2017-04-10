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

	reloadUsers() {
		// this.props.dispatch(getUsers());
	}

	renderErrorUserList( error ) {
		let body = null;
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
		return body;
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

	renderUserList( users ) {
		let usersRender = [];
		const usersSorted	= this.sortUsers(users);
		usersSorted.forEach((user, index) =>{
			usersRender.push(
				<ContactLink
					label={user.email}
					key={user.id}
					userId={user.id}
					name={user.name}
					chatSettings={user.chatSettings}
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
		const {users, error} = this.props;
		let body = null;

		if ( error ) {
			body = this.renderErrorUserList( error );
		} else {
			body = this.renderUserList( users );
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
