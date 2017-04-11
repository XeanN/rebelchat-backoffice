import React from 'react';
import ReactDOM from 'react-dom';
import ContactBadge from "../common/contactBadge";
import { connect } from "react-redux";
import { setSelectedUser } from "../../actions/userActions";
import { getMessagesByUser } from "../../actions/messageActions";

@connect((store) => {
	return {
		error: store.users.error
	}
})
export default class ContactLink extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			user: props.user,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		// this.props.dispatch(onNewMessageByUser(this.state.userId));
	}

	handleClick() {
		//SET USER AS SELECTED
		this.props.dispatch(setSelectedUser(this.state.user));
		//GET MESSAGE BY USER
		this.props.dispatch(getMessagesByUser(this.state.user.id));
	}


	render() {
		const error = this.props.error;

		return (
			<a
				className="left-menu-option mdl-navigation__link"
				href={'#lobby/user/' + this.state.user.id  +'/messages'}
				onClick={this.handleClick}
			>
				<span className="fa fa-inbox fa-lg" role="presentation"></span>
				&nbsp;&nbsp;&nbsp;{this.state.user.email}
			</a>
		)
	}
}
