import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { Checkbox } from 'react-mdl';
import Avatar from '../../models/avatar';
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
		admin: store.users.admin
	}
})
export default class Messages extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			avatars: []
		}
	}

	componentWillMount() {
		Avatar.getAll().then(response => {
			if ( response.status == 200 ) {
				const avatars = response.data.data;
				this.setState({
					avatars: avatars
				});
			} else {
				//TODO HANDLE ERROR
			}
		}).catch(error =>{
			console.log(error);
		})
	}

	displayProfilePictures() {
		const pictures = [];
		const keys = Object.keys(this.state.avatars);
		let selected = null;
		keys.forEach( key =>{
			pictures.push(
				<img
					key={key}
					id={key}
					className="rebelchat-img rebelchat-img-sm"
					alt={key}
					src= {this.state.avatars[key]}
				/>
			)

		});
		return pictures;
	}

	render() {
		let body = null;
		// const pictures = this.displayProfilePictures();
		// <h5>
		// 	<i className="material-icons rules-icon">account_box</i>
		// 	<span className="settings-title">Profile Image</span>
		// </h5>
		// <div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
		// 	{pictures}
		// </div>
		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						Settings
					</h5>

					<div className="section__text mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
						<h5>
							<i className="material-icons rules-icon">notifications</i>
							<span className="settings-title">Notifications</span>
						</h5>
						<div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
							<Checkbox label="I would like to receive sounds notifications for the messages " ripple defaultChecked />
							<Checkbox label="I would like to receive web notifications for the messages " ripple defaultChecked />
						</div>

					</div>
				</div>
			</section>
		)
	}

}
