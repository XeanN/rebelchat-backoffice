import React from 'react';
import ReactDOM from 'react-dom';
import ContactBadge from "../common/contactBadge";
import { connect } from "react-redux";
import { countUnreadMessageByUser } from "../../actions/userActions";

@connect((store) => {
	return {
		users: store.users.list,
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
		this.props.dispatch(countUnreadMessageByUser(this.state.userId));
	}

	render() {
		const users = this.props.users;
		//TODO VALIDATE USERS FILTER JUST IN CASE
		const user = users.filter(user=>{
			return user.id = this.state.userId
		})[0];

		return (
			<a
				className="left-menu-option mdl-navigation__link"
				href={'#'}>
					<span className="fa fa-inbox fa-lg" role="presentation"></span>
					&nbsp;&nbsp;&nbsp;{this.state.label}
					<ContactBadge count={user.unreadMessage}/>
			</a>
		)
	}
}
