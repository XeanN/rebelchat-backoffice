import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from "react-redux";
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import { Message } from '../components/lobby/chatzone';
import '../styles/components/chatZone.css';

class ChatZoneContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.selectedClient) {
			this.props.watchMessagesAddedEvent(
				this.props.selectedClient
			);
		}
	}

	renderMessages() {
		const arrmessages = [];
		const { messages } = this.props;
		Object.keys(messages).forEach((key) => {
			const message = messages[key];
			message.key = key;
			arrmessages.push(
				<Message message={message} />
			)
		});
		return arrmessages;
	}

	render() {
		const messages = this.renderMessages();
		return (
			<div id="chat-zone-container" className="container">
				<Alert color="light">
					Welcome Admin, This is your space. You can see the basic backoffice's features and configure it in different ways
				</Alert>
				<ul className="messages">
					{messages}
				</ul>
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
