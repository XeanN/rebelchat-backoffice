import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Textfield } from "react-mdl";
// import User from "../../models/user";
import Notification from 'react-notification-system';
// import ServerErrorHandler from '../../helpers/serverErrorHandler';
// import Auth from '../../auth';
// import { setAdminUser } from '../../actions/userActions';

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

	login(event) {
		event.preventDefault();
		// User.login(this.state).then((data) => {
		// 	Auth.authenticate(data);
		// 	if (data && data.data && data.data.data) {
		// 		this.props.dispatch(setAdminUser(data.data.data));
		// 	}
		// 	document.location.hash = "#/lobby/home";
		// }).catch(error => {
		// 	console.log(error);
		// 	const _error = new ServerErrorHandler(error);
		// 	this._notificationSystem.addNotification(
		// 		_error.getErrorNotificationObject()
		// 	);
		// })
	}

	render() {
		const buttonClasses = "login-button mdl-button mdl-js-button "
			+ "mdl-button--raised mdl-js-ripple-effect mdl-color--cyan-500 "
			+ "mdl-color-text--white";
		return (
			<div className="login-bg text-center">
				<div className="login-container mdl-shadow--2dp">
					<img src="images/logo.png" width="150px" height="auto" />
					<form>
						<Textfield
							label="Email"
							onChange={(this.handleChange.bind(this, 'email'))}
							style={{ 'width': '100%' }}
						/>
						<Textfield
							label="Password"
							onChange={this.handleChange.bind(this, 'password')}
							type="password"
							style={{ 'width': '100%' }}
						/>
						<button
							onClick={this.login.bind(this)}
							disabled={this.state.loading}
							className={buttonClasses}
						>
							Log In
						</button>

					</form>
				</div>
				{/* <Notification ref="notification" /> */}
			</div>
		);
	}
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
