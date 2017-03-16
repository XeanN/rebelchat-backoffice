import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getUsers, onChangeUsers } from "../../actions/userActions";
import Spinner from "../common/spinner";
import ContactLink from "../common/contactLink";

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
		this.props.dispatch(onChangeUsers());
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

	sortUsers(users) {
		 return Array.prototype.sort.call(users, function(a, b) {
			return new Date(b.lastActivity) - new Date(a.lastActivity);
		});
	}

	renderUserList(fetching, users) {
		let usersRender = [];
		var usersSorted	= this.sortUsers(users);
		usersSorted.forEach((user, index) =>{
			if ( user.email && user.name ){
				usersRender.push(
					<ContactLink
						label={user.email}
						key={index}
						userId={user.id}
					/>
				)
			}
		});
		return (
			<div className="users-container">
				<div>
					<Spinner label="Loading Users" show={fetching} ref="spinner"/>
					<div className="mdl-layout-spacer mdl-color--white"></div>
				</div>
				<div className="mdl-layout-spacer"></div>
				{usersRender}
			</div>
		)
	}

	render() {
		const {users, fetching, fetched, error} = this.props;
		let body = null;

		if ( error ) {
			body = this.renderErrorUserList(error, fetching);
		} else {
			body = this.renderUserList(fetching, users);
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
