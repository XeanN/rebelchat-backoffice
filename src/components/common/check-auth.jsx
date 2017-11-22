import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../lib/firebase';
import { Auth } from '../../lib/auth';

const AuthManager = Auth();

export default function (ComposedComponent) {

	class CheckAuthentication extends Component {

		constructor(props) {
			super(props);
			this.state = {
				authenticated: false
			}
		}

		checkAuthenticatedUser(props) {
			const userRecentlyAuthenticatd = props.authenticated;
			const userAlreadyAuthenticatd = auth.currentUser;
			console.log(userAlreadyAuthenticatd, !!userRecentlyAuthenticatd, AuthManager.checkUserLocalStorage());
			return (userAlreadyAuthenticatd || !!userRecentlyAuthenticatd || AuthManager.checkUserLocalStorage())
		}

		componentWillMount() {
			this.setState({
				authenticated: this.checkAuthenticatedUser(this.props)
			})
		}

		componentWillUpdate(nextProps) {
			this.setState({
				authenticated: this.checkAuthenticatedUser(nextProps)
			})
		}

		render() {
			console.log(this.state);
			if (this.state.authenticated) {
				return <Redirect to='/lobby' />;
			} else {
				return <ComposedComponent {...this.props} />;
			}
		}
	}

	const mapStateToProps = state => ({
		authenticated: state.auth.authenticated
	});

	return connect(mapStateToProps)(CheckAuthentication);
}
