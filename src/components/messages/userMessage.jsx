import React from 'react';
import { connect } from 'react-redux';
import { AVATAR_CLIENT_URL } from '../../defaultProps';

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
	}
})
export default class UserBoxMessage extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
	}

	getAvatar(url, name) {
		let avatar = null;
		const title = name + "'s avatar";
		if ( url && url.length ) {
			avatar = <img
				src={url}
				alt={title}
				className="rebelchat-img-sm"
				title={title}
			/>
		} else {
			avatar = <img
				src={AVATAR_CLIENT_URL}
				alt={title}
				className="rebelchat-img-sm"
				title={title}
			/>
		}
		return avatar;
	}

	render() {
		const {label, id, name, chatSettings} = this.props.selectedUser;
		if ( this.props.selectedUser  ) {
			const avatar = this.getAvatar(chatSettings.avatarUrl, name);
			return (
				<li className="mdl-list__item mdl-list__item--three-line message-container item-list rebelchat-message-item">
					<div className="mdl-list__item-primary-content primary-content mdl-grid--no-spacing rebelchat-message-item-container">
						{avatar}
						<span>{name}</span>
						<span className="mdl-list__item-text-body rebelchat-message" title={this.props.createdAt}>
							{this.props.message}
						</span>
					</div>
				</li>
			)
		} else {
			//TODO HANDLE ERROR WHEN THERE IS NO SELECTED USER
			return null;
		}
	}

}
