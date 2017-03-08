import React from 'react';
import { connect } from "react-redux";
import { getUsers } from "../../actions/userActions";

@connect((store) => {
	return {
		users: store.users.list
	}
})
export default class Login extends React.Component {

	componentWillMount() {
		this.props.dispatch(getUsers());
	}

	render() {
		console.log(this.props.users);
		return (
			<h1>THIS IS THE LOGIN COMPONENT</h1>
		)
	}

};
