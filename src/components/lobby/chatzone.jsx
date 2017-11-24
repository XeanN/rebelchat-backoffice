import React from 'react';
import { Alert } from 'reactstrap';
import { auth } from '../../lib/firebase';
import { watchMessagesAddedEvent } from '../../actions/messages';
import { Message } from '../../components/lobby/message';
import '../../styles/components/chatZone.css';

export class ChatZone extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.selectedClient ) {
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
				<Message message={message}/>
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
						{ messages }
					</ul>
			</div>
		)
	}

};

