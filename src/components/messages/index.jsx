import React from 'react';
import { connect } from "react-redux";
import {IconButton, Menu, MenuItem, Textfield } from 'react-mdl';
import UserMessage from './userMessage';
import { setSelectedUser, getUserMessages } from "../../actions/userActions";

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
		userMessages: store.users.selectedUserMessages,
		usersList: store.users.list,
	}
})
export default class Messages extends React.Component {

	constructor (props) {
		super(props);
	}

	getUserMessagesData() {
		const {label, id} = this.props.selectedUser;
		const userId = this.props.params.id;
		if ( !label && !id ) {
			const users = Object.keys(this.props.usersList);
			if ( users.length > 0 && userId) {
				const selectedUser = this.props.usersList[userId];
				this.props.dispatch(
					setSelectedUser(
						{
							label: selectedUser.email,
							userId: selectedUser.id,
							name: selectedUser.name,
							chatSettings: selectedUser.chatSettings
						}
					)
				);
			}
		}

		if ( !this.props.userMessages && userId ) {
			this.props.dispatch(getUserMessages(userId));
		}
	}

	buildMessagesHistory(messages) {
		const history = [];
		let lastMessageSource = null;
		if ( messages ) {
			const messagesId = Object.keys(messages);
			messagesId.forEach ( (id,index) => {
				const message = messages[id];
				switch (message.source) {
					case 'CLIENT':
						//
						lastMessageSource = 'CLIENT';
						history.push(
							<UserMessage
								key={id}
								message={message.message}
								createdAt={message.createdAt}
							/>
						)
						break;
					case 'SERVER':
						//
						lastMessageSource = 'SERVER';
						break;
					default:
						//TODO HANDLE BETTER THIS CONDITION
						throw new Error('Message withput source');
				}
			});
		}
		return history;
		/*
		return (
			<ul className="demo-list-three mdl-list rebelchat-message-list">
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>Bryan Cranston</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
					</div>
				</li>
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>Bryan Cranston</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
					</div>
				</li>
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>Bryan Cranston</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
					</div>
				</li>
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>Bryan Cranston</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
						<span className="mdl-list__item-text-body rebelchat-message">
							Bryan Cranston played the role of Walter in Breaking Bad. He is also known
							for playing Hal in Malcom in the Middle.
						</span>
					</div>
				</li>
			</ul>
		)
		*/
	}

	render() {
		this.getUserMessagesData();

		const {label, id} = this.props.selectedUser;
		const messages = this.buildMessagesHistory(this.props.userMessages);

		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col rebelchat-main-messages-container">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						{label}
					</h5>
					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-container">
						{ messages }
					</div>
					<div className="mdl-card__actions card-actions">
						<div className="mdl-grid">
							<div className="mdl-cell mdl-cell--12-col" style={{display:'inherit'}}>
								<Textfield
									onChange={() => {}}
									label="Message"
									style={{width: '100%'}}
								/>
							<IconButton name="send" colored	title="Send message" style={{"marginTop":"10px"}}/>
							</div>
						</div>
					</div>
				</div>
				<div className="button-menu">
					<IconButton name="more_vert" id="demo-menu-lower-left" />
					<Menu target="demo-menu-lower-left" align="right">
						<MenuItem>Some Action</MenuItem>
						<MenuItem>Another Action</MenuItem>
						<MenuItem disabled>Disabled Action</MenuItem>
						<MenuItem>Yet Another Action</MenuItem>
					</Menu>
				</div>
			</section>
		)
	}

}
