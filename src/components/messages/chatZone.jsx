import React from 'react';
import { connect } from 'react-redux';
import {IconButton, Textfield } from 'react-mdl';
import { sendMessage, newServerMessage } from "../../actions/messageActions";
import { SERVER_SOURCE } from '../../settings';

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
		userIsSelected: store.users.userIsSelected
	}
})
export default class ChatZone extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			message: null
		}
	}

	writeNewMessage(event) {
		const value = event.target.value;
		if ( value && value.length ){
			this.setState({
				message: value
			})
		}
	}

	sendMessageByKey(event) {
		if (event.key == 'Enter' && this.state.message ) {
			this.sendMessage();
		}
	}

	sendMessageByButton() {
		if (this.state.message ) {
			this.sendMessage();
		}
	}

	sendMessage(event) {
		if ( this.props.userIsSelected ) {
			const { id } = this.props.selectedUser;
			sendMessage(id, this.state.message ).then( data =>{
				//CLEAN MESSAGE INPUT
				this.refs['textInput'].inputRef.value='';
				//UPDATE MESSAGES
				const message = {
					message: this.state.message,
					read:false,
					source: SERVER_SOURCE
				}
				this.props.dispatch(newServerMessage(message));
			}).catch ( error => {
				//TODO HANDLE ERROR
				console.log(error);
			});
		} else {
			//TODO HANDLE ERROR
		}
	}

	render() {
		return (
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--12-col" style={{display:'inherit'}}>
					<Textfield
						ref="textInput"
						onChange={this.writeNewMessage.bind(this)}
						label="Message"
						style={{width: '100%'}}
						onKeyPress={this.sendMessageByKey.bind(this)}
					/>
					<IconButton
						onClick={this.sendMessageByButton.bind(this)}
						name="send"
						colored	title="Send message"
						style={{"marginTop":"10px"}}
					/>
				</div>
			</div>
		);
	}

}
