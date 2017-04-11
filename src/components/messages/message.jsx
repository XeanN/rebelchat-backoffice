import React from 'react';
import { connect } from 'react-redux';
import { AVATAR_CLIENT_URL, AVATAR_SERVER_URL } from '../../defaultProps';
import { getUsers } from "../../actions/messageActions";
import CommonHelper from "../../helpers/commonHelper";

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
	}
})
export default class Message extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			messages: props.messages,
			type: props.type
		}
	}

	componentWillMount() {
	}

	getAvatar(url, name) {
		let avatar = null;
		const title = name + "'s avatar";
		if ( url && url.length ) {
			avatar = <img
				src={url}
				alt={title}
				className="rebelchat-img-sm"
				title={title}
			/>
		} else {
			avatar = <img
				src={AVATAR_CLIENT_URL}
				alt={title}
				className="rebelchat-img-sm"
				title={title}
			/>
		}
		return avatar;
	}

	createServerMessage() {
		const avatar = this.getAvatar(AVATAR_SERVER_URL, name);
		const messages = this.state.messages;
		return (
			<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-container">
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						{avatar}
						<span>Operator</span>
						{ messages.map( message =>{
							return (
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
							)
						})}
					</div>
				</li>
			</div>
		)
	}

	createClientMessage() {
		if ( this.props.selectedUser  ) {
			const {label, id, name, chatSettings} = this.props.selectedUser;
			const avatar = this.getAvatar(chatSettings.avatarUrl, name);
			const messages = this.state.messages;
			return (
				<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-container">
					<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
						<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
							{avatar}
							<span>{name}</span>
							{ messages.map( (message,index) =>{
								return (
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
								)
							})}
						</div>
					</li>
				</div>
			)
		} else {
			//TODO HANDLE ERROR WHEN THERE IS NO SELECTED USER
			return null;
		}
	}

	render() {
		if ( this.state.type == 'SERVER') {
			return this.createServerMessage();
		} else {
			return this.createClientMessage();
		}
	}

}
