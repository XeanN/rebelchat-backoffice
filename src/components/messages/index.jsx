import React from 'react';
import { connect } from "react-redux";
import { Menu, MenuItem, IconButton } from 'react-mdl';
import Message from './message';
import { getUserAndSetSelected } from "../../actions/userActions";
import { getMessagesByUser } from "../../actions/messageActions";
import ChatZone from './chatZone';
import ScrollArea from 'react-scrollbar';
import Spinner from "../common/spinner";

const DEFAULT_ERROR_MESSAGE = "There was a problem loading the conversation";

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
		userIsSelected: store.users.userIsSelected,

		users: store.users.list,
		userError: store.users.error,
		userFetching: store.users.fetching,
		userFetched: store.users.fetched,

		fetchingUser: store.users.fetchingUser,
		fetchedUser: store.users.fetchedUser,
		errorUser: store.users.errorUser,
		singleUser: store.users.singleUser,

		messages: store.messages.list,
		messageError: store.messages.error,
		messageFetching: store.messages.fetching,
		messageFetched: store.messages.fetched
	}
})
export default class Messages extends React.Component {

	constructor (props) {
		super(props);
	}

	componentDidMount() {
		//FOCUS LAST MESSAGES
		if ( this.refs['scrollbar'] ) {
			this.refs['scrollbar'].scrollBottom();
		}
	}

	componentWillMount() {
		const userId = this.props.params.id;
		const {userIsSelected} = this.props;
		if ( !userIsSelected ) {
			this.props.dispatch(getMessagesByUser(userId));
			this.props.dispatch(getUserAndSetSelected(userId));
		}
	}

	/**
	 * handleUsersError - Handle de error base on the custom message
	 *
	 * @param  {object} error Error object
	 * @return {string}       Error Message description
	 */
	handleUsersError( error ) {
		let message = null;
		if ( error ) {
			switch (true) {
				case error.message && error.message.length:
					message = error.message;
					break;
				default:
					message = DEFAULT_ERROR_MESSAGE;
			}
		} else {
			message = DEFAULT_ERROR_MESSAGE;
		}
		return message;
	}

	messageError(error) {
		//TODO ELABORATE A BETTER ERROR FOR THIS COMPONENT
		const errorMessage = this.handleUsersError(error);
		return (
			<div className="container-options">
				<div className="users-container-error">
					<p>
						<i className="material-icons">report_problem</i>
					</p>
					<span>
						<b>
							{errorMessage}
						</b>
					</span>
				</div>
			</div>
		)
	}

	messageFetching() {
		return (
			<Spinner
				show= {true}
				label= "Loading conversation..."
				class="red"
			/>
		)
	}

	messageFetched(messages) {
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
		return (
			<ScrollArea
				ref="scrollbar"
				horizontal={false}
			>
				{ history }
			</ScrollArea>
		);
	}

	render() {
		let body = null;
		let label = null;
		const {selectedUser} = this.props;
		const { userIsSelected } = this.props;
		const { messages } = this.props;
		const { messageError } = this.props;
		const { messageFetching } = this.props;
		const { messageFetched } = this.props;
		const { fetchingUser } = this.props;
		const { fetchedUser } = this.props;
		const { errorUser } = this.props;
		const { singleUser } = this.props;

		if ( userIsSelected ) {
			switch (true) {
				case messageFetching:
					body = this.messageFetching();
					label = 'Loading...'
					break;
				case messageFetched:
					body = this.messageFetched(messages);
					label = selectedUser.email;
					break;
				case messageError:
					label = 'Ooops! :(';
					body = this.messageError(messageError);
					break;
			}
		} else {
			switch (true) {
				case fetchingUser:
					body = this.messageFetching();
					label = 'Loading...';
					break;
				case errorUser:
					label = '';
					body = this.messageError(errorUser);
					break;
			}
		}

		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col rebelchat-main-messages-container">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						{label}
					</h5>

					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing rebelchat-messages-area">
						{body}
					</div>
					{ messageFetched ?
							(
								<div className="mdl-card__actions card-actions">
									<ChatZone/>
								</div>
							)
						:
							null
					}

				</div>
				{ messageFetched ?
						(
							<div className="button-menu">
								<IconButton name="more_vert" id="demo-menu-lower-left" />
								<Menu target="demo-menu-lower-left" align="right">
									<MenuItem>Some Action</MenuItem>
									<MenuItem>Another Action</MenuItem>
									<MenuItem disabled>Disabled Action</MenuItem>
									<MenuItem>Yet Another Action</MenuItem>
								</Menu>
							</div>
						)
					:
						null
				}

			</section>
		)
	}

}
