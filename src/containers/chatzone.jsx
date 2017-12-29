import React from 'react';
import { connect } from "react-redux";
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import { Message } from '../components/lobby/message';
import { DateEntry } from '../components/lobby/date-entry';
import MessageInput from '../components/lobby/message-input';
import '../styles/components/chatZone.css';

class ChatZoneContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.scrollToBottom = this.scrollToBottom.bind(this);
		this.createDateEntry = this.createDateEntry.bind(this)
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

	//Creates the date or the word Today
	createDateEntry(date) {
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
		day = days[date.getDay()],
		nDay = ('0' + date.getDate()).substr(-2),
		month = months[date.getMonth()],
		now = new Date().setHours(0,0,0,0),
		then = date.setHours(0,0,0,0),
		diff = now - then,
		isToday = diff == 0,
		theDate = isToday? 'Today':`${day}, ${month} ${nDay}`;

		return theDate;
	}

	renderMessages() {
		const arrmessages = [];
		const { messages, selectedClient } = this.props;
		if(!messages){
			return ('');
		}
		var date = false,
			timestamp;
		Object.keys(messages).forEach((key) => {
			const message = messages[key];
			if(!date){//If date hasn't been set yet
				timestamp = message.createdAt;
				date = new Date(timestamp);//set it the first time
				var theDate = this.createDateEntry(date);
				arrmessages.push(
					<DateEntry key={message.key+'-date-start'} date={theDate}/>//Now push the first date entry on top of chat
				);
			}else{
				var curdate = new Date(message.createdAt);
				var timeDiff = Math.abs(curdate.getTime() - date.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
				if(diffDays > 1){
					//repeat process
					date = new Date(curdate);
					var theDate = this.createDateEntry(date);
					arrmessages.push(
						<DateEntry key={message.key+'-date'} date={theDate}/>//Now push the next date entry on top of chat
					);
				}
			}
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
