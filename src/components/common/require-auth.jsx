import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../lib/firebase';


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
			console.log('==a=>', userAlreadyAuthenticatd)
			return (userAlreadyAuthenticatd || !!userRecentlyAuthenticatd)
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
			const { authenticated } = this.state;
			if (authenticated) {
				return <ComposedComponent {...this.props} />;
			} else {
				return <Redirect to='/login' />;
			}
		}
	}

	const mapStateToProps = state => ({
		authenticated: state.auth.authenticated,
	});

	return connect(mapStateToProps)(RequireAuth);
}
