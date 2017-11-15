import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Textfield } from "react-mdl";
// import User from "../../models/user";
import Notification from 'react-notification-system';
// import ServerErrorHandler from '../../helpers/serverErrorHandler';
// import Auth from '../../auth';
// import { setAdminUser } from '../../actions/userActions';

import '../styles/containers/login.css';

export class LoginContainer extends React.Component {

	constructor(props) {
		super(props);
		this._notificationSystem = null;
		this.state = {
			email: '',
			password: ''
		}
	}

	componentDidMount() {
		// this._notificationSystem = this.refs.notification;
	}

	handleChange(key, event) {
		const state = this.state;
		state[key] = event.target.value
		this.setState(state);
	}

	render() {
		return (
			<div className="container-fluid login-container">
				<form className="form-signin text-center">
					<img className="login-logo" src="images/logo.png" width="100px" height="auto" />
					<label for="inputEmail" className="sr-only">Email address</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
					<label for="inputPassword" className="sr-only">Password</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
				</form>
			</div>
		);
	}
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
