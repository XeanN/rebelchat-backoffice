import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { login } from '../actions/auth';
// import User from "../../models/user";
import Notification from 'react-notification-system';
// import ServerErrorHandler from '../../helpers/serverErrorHandler';
// import Auth from '../../auth';
// import { setAdminUser } from '../../actions/userActions';

import '../styles/containers/login.css';

class LoginContainer extends React.Component {

	constructor(props) {
		super(props);
		this._notificationSystem = null;
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleChange(event) {
		const state = this.state;
		state[event.target.name] = event.target.value
		this.setState(state);
	}

	handleLogin() {
		this.props.login(this.state.email, this.state.password);
	}

	render() {
		const { progress } = this.props;
		return (
			<div className="container-fluid login-container">
				<form className="form-signin text-center">
					<img className="login-logo" src="images/logo.png" width="100px" height="auto" />
					<label htmlFor="inputEmail" className="sr-only">Email address</label>
					<input
						type="email"
						id="inputEmail"
						name="email"
						className="form-control"
						placeholder="Email address"
						required=""
						autoFocus=""
						onChange={this.handleChange}
					/>
					<label htmlFor="inputPassword" className="sr-only">Password</label>
					<input
						type="password"
						id="inputPassword"
						name="password"
						className="form-control"
						placeholder="Password"
						required=""
						onChange={this.handleChange}
					/>
					<button
						className="btn btn-lg btn-primary btn-block"
						type="submit"
						onClick={this.handleLogin}
						disabled={progress}
					>
						<strong>{progress ? 'loading...' : 'Submit'}</strong>
					</button>
				</form>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		authenticated: state.auth.authenticated,
		progress: state.auth.progress
	}
};

const mapDispatchToProps = dispatch => bindActionCreators({
	login: login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
