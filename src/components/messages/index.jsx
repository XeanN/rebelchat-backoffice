import React from 'react';
import { connect } from "react-redux";
import {IconButton, Menu, MenuItem, Textfield } from 'react-mdl';
import UserMessage from './userMessage';

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
		userMessages: store.users.selectedUserMessages
	}
})
export default class Messages extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
	}

	buildMessagesHistory(messages) {
		const history = [];
		let lastMessageSource = null;
		// if ( messages ) {
		// 	const messagesId = Object.keys(messages);
		// 	messagesId.forEach ( (id,index) => {
		// 		const message = messages[id];
		// 		switch (message.source) {
		// 			case 'CLIENT':
		// 				//
		// 				lastMessageSource = 'CLIENT';
		// 				history.push(
		// 					<UserMessage
		// 						key={index}
		// 					/>
		// 				)
		// 				break;
		// 			case 'SERVER':
		// 				//
		// 				lastMessageSource = 'SERVER';
		// 				break;
		// 			default:
		// 				//TODO HANDLE BETTER THIS CONDITION
		// 				throw new Error('Message withput source');
		// 		}
		// 	});
		// }
		// return history;
		return (
			<ul className="demo-list-three mdl-list">
			  <li className="mdl-list__item mdl-list__item--three-line message-container item-list">
			    <div className="mdl-list__item-primary-content primary-content">

				      	<i className="material-icons mdl-list__item-avatar">person</i>

					      <span>Bryan Cranston</span>
					      <span className="mdl-list__item-text-body">
					        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
					        for playing Hal in Malcom in the Middle.
					      </span>
								<span className="mdl-list__item-text-body">
					        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
					        for playing Hal in Malcom in the Middle.
					      </span>
								<span className="mdl-list__item-text-body">
					        Bryan Cranston played the role of Walter in Breaking Bad. He is also known
					        for playing Hal in Malcom in the Middle.
					      </span>
			    </div>
			  </li>
			</ul>
		)
	}

	render() {
		//TODO GET FROM ENDPOINT params.id
		const {label, id} = this.props.selectedUser;
		const messages = this.buildMessagesHistory(this.props.userMessages);

		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						{label}
					</h5>
					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing messages-container">
						{ messages }
					</div>
					<div className="mdl-card__actions card-actions">
						<div className="mdl-grid">
							<div className="mdl-cell mdl-cell--12-col" style={{display:'inherit'}}>
								<Textfield
									onChange={() => {}}
									label="Message..."
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
