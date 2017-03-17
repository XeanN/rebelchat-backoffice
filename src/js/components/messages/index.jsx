import React from 'react';
import { connect } from "react-redux";
// import { getUsers } from "../../actions/userActions";

export default class Messages extends React.Component {

	componentWillMount() {
		// this.props.dispatch(getUsers());
	}

	render() {
		console.log(this.props.users);
		return (
			<h1>THIS IS THE MESSAGE COMPONENT</h1>
		)
	}

};
