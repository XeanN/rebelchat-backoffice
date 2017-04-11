import React from 'react';
import { connect } from 'react-redux';
import {IconButton, Textfield } from 'react-mdl';
import { sendMessage } from "../../actions/messageActions";
import { getUserMessages } from "../../actions/userActions";

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
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

	SendMessage(event) {
		if (event.key == 'Enter' && this.state.message ) {
			const { userId } = this.props.selectedUser;
			if ( userId ) {
				sendMessage(userId, this.state.message ).then( data =>{
					//CLEAN MESSAGE INPUT
					this.refs['textInput'].inputRef.value='';
					//UPDATE MESSAGES
					this.props.dispatch(getUserMessages(userId));
				}).catch ( error => {
					//TODO HANDLE ERROR
					console.log(error);
				});
			}
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
						onKeyPress={this.SendMessage.bind(this)}
					/>
					<IconButton
						onClick={this.SendMessage.bind(this)}
						name="send"
						colored	title="Send message"
						style={{"marginTop":"10px"}}
					/>
				</div>
			</div>
		);
	}

}
