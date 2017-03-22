import React from 'react';
import ReactDOM from 'react-dom';
import ContactBadge from "../common/contactBadge";
import { connect } from "react-redux";
import { onNewMessageByUser } from "../../actions/messageActions";

@connect((store) => {
	return {
		messages: store.messages.list,
		error: store.messages.error
	}
})
export default class ContactLink extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			label: props.label,
			userId: props.userId
		}
	}

	componentWillMount() {
		this.props.dispatch(onNewMessageByUser(this.state.userId));
	}

	getUserUnreadMessageCount() {
		const messages = this.props.messages[this.state.userId];
		let counter = 0;
		if ( messages ) {
			const keys = Object.keys(messages);
			keys.forEach( key =>{
				if ( !messages[key].read ){
					counter ++
				}
			});
		}
		return counter
	}

	render() {
		const error = this.props.error;
		let counter = this.getUserUnreadMessageCount();

		return (
			<a
				className="left-menu-option mdl-navigation__link"
				href={'#lobby/messages/' + this.state.userId}>
					<span className="fa fa-inbox fa-lg" role="presentation"></span>
					&nbsp;&nbsp;&nbsp;{this.state.label}
					<ContactBadge count={counter} />
			</a>
		)
	}
}
