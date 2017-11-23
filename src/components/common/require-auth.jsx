import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../lib/firebase';
import { Auth } from '../../lib/auth';
import { setUserAlreadyAuthenticated } from '../../actions/auth';

const AuthManager = Auth();

export default function (ComposedComponent) {

	class RequireAuth extends Component {

		constructor(props) {
			super(props);
			this.state = {
				authenticated: false
			}
		}

		checkAuthenticatedUser(props) {
			const userRecentlyAuthenticatd = props.authenticated;
			const userAlreadyAuthenticatd = auth.currentUser;
			// CHECK STORE AUTHENTICATED FLAG , FIREBASE AUTH API AND LOCALSTORAGE FOR AN ALREADY AUTHENTICATED USER
			return (userAlreadyAuthenticatd || !!userRecentlyAuthenticatd || AuthManager.checkUserLocalStorage())
		}

		componentWillMount() {
			this.setState({
				authenticated: this.checkAuthenticatedUser(this.props)
			})
		}

		componentWillReceiveProps(nextProps) {
			this.setState({
				authenticated: this.checkAuthenticatedUser(nextProps)
			})
		}

		render() {
			const { authenticated } = this.state;
			if (authenticated) {
				// IF THE USER IS AUTHENTICATED IN THE LOCALSTORAGE OR FIREBASE API THE AUTHENTICATED FLAG ON TH STORE IS FALSE
				// SET THE AUTHENTICATED FLAG AS TRUE IF THERE IS AN AUTHENTICATED USER DOESNT MATTER THE AUTHENTICATION METHOD
				this.props.setUserAlreadyAuthenticated();
				return <ComposedComponent {...this.props} />;
			} else {
				return <Redirect to='/login' />;
			}
		}
	}

	const mapStateToProps = state => ({
		authenticated: state.auth.authenticated
	});

	const mapDispatchToProps = dispatch => bindActionCreators({
		setUserAlreadyAuthenticated
	}, dispatch);

	return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}
