import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
// import { Menu, MenuItem, IconButton } from 'react-mdl';
// import Message from './message';
// import { getUserAndSetSelected } from "../../actions/userActions";
// import { getMessagesByUser } from "../../actions/messageActions";
// import ChatZone from './chatZone';
// import MessagesHandler from './messagesHandler';
// import ScrollArea from 'react-scrollbar';
// import Spinner from "../common/spinner";

// const DEFAULT_ERROR_MESSAGE = "There was a problem loading the conversation";

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
		userIsSelected: store.users.userIsSelected,
	}
})
export default class Messages extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
		// const userId = this.props.params.id;
		// const {userIsSelected} = this.props;
		// if ( !userIsSelected ) {
		// 	this.props.dispatch(getMessagesByUser(userId));
		// 	this.props.dispatch(getUserAndSetSelected(userId));
		// }
	}



	render() {
		let body = null;
		let label = 'Settings';

		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col rebelchat-main-messages-container">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						{label}
					</h5>

					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-area">
						{body}
					</div>
					<div className="mdl-card__actions card-actions">

					</div>
				</div>
			</section>
		)
	}

}
