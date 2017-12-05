import React from 'react';
import { connect } from "react-redux";
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import { Message } from '../components/lobby/message';
import MessageInput from '../components/lobby/message-input';
import '../styles/components/chatZone.css';

class ChatZoneContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	componentDidMount() {
		if (this.props.selectedClient) {
			this.props.watchMessagesAddedEvent(
				this.props.selectedClient.key
			);
		}
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}
	
	scrollToBottom() {
		const scrollHeight = this.messageContainer.scrollHeight;
		const height = this.messageContainer.clientHeight;
		const maxScrollTop = scrollHeight - height;
		this.messageContainer.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}

	renderMessages() {
		const arrmessages = [];
		const { messages, selectedClient } = this.props;
		if(!messages){
			return ('');
		}
		Object.keys(messages).forEach((key) => {
			const message = messages[key];
			message.key = key;
			message.senderName = selectedClient.name;
			arrmessages.push(
				<Message key={message.key} message={message} />
			)
		});
		return arrmessages;
	}

	render() {
		const messages = this.renderMessages();
		return (
			<div id="chat-zone-container" className="container">
				<div className="messages-container">
					<ul ref={el => { this.messageContainer = el; }} className="messages">
						{messages}
					</ul>
					<div className="clearer"></div>
					<MessageInput />
				</div>
			</div>
		)
	}

};

const mapStateToProps = state => ({
	selectedClient: state.client.selected,
	messages: state.message.list
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			watchMessagesAddedEvent
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatZoneContainer);
