import React from 'react';
import { connect } from 'react-redux';
import { AVATAR_CLIENT_URL, AVATAR_SERVER_URL } from '../../settings';
import { onNewMessageByUser, clearNewClientMessages } from "../../actions/messageActions";
import CommonHelper from "../../helpers/commonHelper";
import Message from './message';
import ScrollArea from 'react-scrollbar';


export default class MessageHandler extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			messages: props.messages,
			lastSource: null
		}
	}

	scrollToBottom() {
		if ( this.refs['scrollbar'] ) {
			setTimeout(() =>{
				this.refs['scrollbar'].scrollBottom();
			}, 900);
		}
	}

	componentWillMount() {
		// this.props.dispatch(onNewMessageByUser(this.props.selectedUser.id));
	}

	componentDidUpdate() {
		//FOCUS LAST MESSAGES
		this.scrollToBottom();
	}

	componentDidMount() {
		//FOCUS LAST MESSAGES
		this.scrollToBottom();
	}

	buildMessages() {
		const renderMessages = [];
		const messages = this.state.messages;
		if ( this.props.newServerMessage ) {
			messages[this.props.newServerMessage.id] = this.props.newServerMessage;
		}

		if ( this.props.newClientMessage ) {
			const newMessages = this.props.newClientMessage[this.props.selectedUser.id];
			if ( newMessages ) {
				const keys = Object.keys(newMessages);
				keys.forEach ( key => {
					messages[key] = newMessages[key];
				});
				//CLEAR NEW MESSAGES
				this.props.dispatch(
					clearNewClientMessages(this.props.selectedUser.id)
				)
			}

		}

		const messagesId = Object.keys(messages);
		let lastMessageSource = null;
		messagesId.forEach ( (id ,index ) => {
			messages[id].id = id;
			let hasHeader =  lastMessageSource != messages[id].source;
			renderMessages.push(
				<Message
					message={messages[id]}
					header={hasHeader}
					key={id}
				/>
			)
			lastMessageSource = messages[id].source;
		});
		return renderMessages;
	}

	render() {
		const renderMessages = this.buildMessages();
		return (
			<ScrollArea
				ref="scrollbar"
				horizontal={false}
			>
				{ renderMessages }
			</ScrollArea>
		);
	}

}
