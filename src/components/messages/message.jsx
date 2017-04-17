import React from 'react';
import { connect } from 'react-redux';
import { AVATAR_CLIENT_URL, AVATAR_SERVER_URL } from '../../settings';
import { getUsers } from "../../actions/messageActions";
import CommonHelper from "../../helpers/commonHelper";
import { CLIENT_SOURCE, SERVER_SOURCE } from '../../settings';

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
	}
})
export default class Message extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			message: props.message,
			header: props.header
		}
	}

	getAvatar(message) {
		let avatarUrl = null;
		let name = null;
		switch (message.source) {
			case CLIENT_SOURCE:
				let { chatSettings } = this.props.selectedUser;
				name = this.props.selectedUser.name;
				let url = chatSettings.avatarUrl
				if ( url && url.length ) {
					avatarUrl = url;
				} else {
					avatarUrl = AVATAR_CLIENT_URL;
				}
				break;
			case SERVER_SOURCE:
				name = 'Operator';
				avatarUrl = AVATAR_SERVER_URL;
				break;
		}

		const title = name + "'s avatar";
		return (
			<img
				src={avatarUrl}
				alt={title}
				className="rebelchat-img-sm"
				title={title}
			/>
		);
	}

	createMessageWithHeader() {
		const message = this.state.message;
		const avatar = this.getAvatar(message);
		let name = null;
		if ( message.source == SERVER_SOURCE) {
			name = 'Operator';
		} else {
			name = this.props.selectedUser.name
		}

		const date = CommonHelper.buildDateMessageFormat(
			message.createdAt
		);

		return (

				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						{avatar}
						<span style={{'position': 'absolute', 'marginTop':'5px'}}>
							{name}
							<span className="rebelchat-time-label">{date}</span>
							<br/>
							<span
								className="mdl-list__item-text-body rebelchat-message-header"
								title={date}
								key={message.id}
							>
								{message.message}
							</span>
						</span>
					</div>
				</li>

		)
	}

	createMessageWithoutHeader() {
		const message = this.state.message;
		const avatar = this.getAvatar(message);
		return (

				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						<span
							className="mdl-list__item-text-body rebelchat-message"
							title={
								CommonHelper.buildDateMessageFormat(
									message.createdAt
								)
							}
							key={message.id}
						>
							{message.message}
						</span>
					</div>
				</li>

		)
	}

	render() {
		let message = null;
		if ( this.state.header ) {
			message = this.createMessageWithHeader();
		} else {
			message = this.createMessageWithoutHeader();
		}
		return message;
	}

}
