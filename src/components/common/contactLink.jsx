import React from 'react';
import ReactDOM from 'react-dom';
import ContactBadge from "../common/contactBadge";
import { connect } from "react-redux";
import { setSelectedUser } from "../../actions/userActions";
import { getMessagesByUser } from "../../actions/messageActions";
import { onNewMessageByUser, clearNewClientMessages } from "../../actions/messageActions";
import { Badge } from 'react-mdl';

export default class ContactLink extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			user: props.user,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		this.props.dispatch(onNewMessageByUser(this.state.user.id));
	}

	handleClick() {
		//CLEAR NEW MESSAGES
		this.props.dispatch(
			clearNewClientMessages(this.state.user.id)
		)
		//SET USER AS SELECTED
		this.props.dispatch(setSelectedUser(this.state.user));
		//GET MESSAGE BY USER
		this.props.dispatch(getMessagesByUser(this.state.user.id));
	}

	truncateEmail(email) {
		if ( email ) {
			// const tokens = email.split('@');
			let shortName = email
			if ( shortName.length > 15 ) {
				shortName = shortName.substring(0, 15) + '...'
			}
			return shortName;
		}

		return email;
	}

	render() {
		const error = this.props.error;
		let userNewMessages = []
		let newMessagesCount = 0;
		if ( this.state.user.id !=this.props.selectedUser.id && this.props.newClientMessage && this.props.newClientMessage[this.state.user.id] ) {
			userNewMessages = this.props.newClientMessage[this.state.user.id];
			newMessagesCount = userNewMessages ? Object.keys(userNewMessages).length : 0
		}
		const email = this.truncateEmail(this.state.user.email);

		return (
			<a
				title={this.state.user.email}
				className="left-menu-option mdl-navigation__link"
				href={'#lobby/user/' + this.state.user.id  +'/messages'}
				onClick={this.handleClick}
			>
				<span className="fa fa-inbox fa-lg" role="presentation"></span>
				&nbsp;&nbsp;&nbsp;<span>{email}</span>
				<ContactBadge count={newMessagesCount}/>
			</a>
		)
	}
}
