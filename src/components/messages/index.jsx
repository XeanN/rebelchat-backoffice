import React from 'react';
import { connect } from "react-redux";
import { Menu, MenuItem, IconButton } from 'react-mdl';
import Message from './message';
import { setSelectedUser, getUserMessages } from "../../actions/userActions";
import ChatZone from './chatZone';
import ScrollArea from 'react-scrollbar';

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

	componentDidMount() {
		//FOCUS LAST MESSAGES
		// console.log(this.refs['scrollbar']);
		this.refs['scrollbar'].scrollBottom();
	}

	getUserMessagesData() {
		const {label, id} = this.props.selectedUser;
		const userId = this.props.params.id;
		if ( !label && !id ) {
			const users = Object.keys(this.props.usersList);
			if ( users.length > 0 && userId) {
				const selectedUser = this.props.usersList[userId];
				if ( selectedUser ) {
					this.props.dispatch(
						setSelectedUser(
							{
								label: selectedUser.email,
								userId: userId,
								name: selectedUser.name,
								chatSettings: selectedUser.chatSettings
							}
						)
					);
				} else {
					//TODO HANDLE NOT FOUND USER
				}
			}
		}

		if ( !this.props.userMessages && userId ) {
			this.props.dispatch(getUserMessages(userId));
		}
	}

	buildMessagesHistory(messages) {
		const history = [];
		const allMessages = [];
		let _messages = [];
		let lastMessageSource = null;
		if ( messages ) {
			const messagesId = Object.keys(messages);
			messagesId.forEach ( (id,index) => {
				//ADD KEY TO MESSAGE OBJECT
				messages[id].id = id;
				//CHECK MESSAGE SOURCE
				if ( lastMessageSource == messages[id].source || lastMessageSource == null) {
					_messages.push( messages[id] );
				} else {
					allMessages.push(_messages);
					_messages = [];
					_messages.push(messages[id])
				}
				lastMessageSource = messages[id].source;
			});
			//ADD THE LAST MESSAGE
			allMessages.push(_messages);
			//CREATE MESSAGE COMPONENT
			allMessages.forEach( (messages,index) => {
				history.push(
					<Message
						key={index}
						messages={messages}
						type={messages[0].source}
					/>
				);
			});
		}
		return history;
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

					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-area">
						<ScrollArea
							ref="scrollbar"
							horizontal={false}
						>
							{ messages }
						</ScrollArea>
					</div>

					<div className="mdl-card__actions card-actions">
						<ChatZone/>
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
