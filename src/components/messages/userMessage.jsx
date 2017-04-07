import React from 'react';

export default class UserBoxMessage extends React.Component {

	constructor (props) {
		super(props);
	}

	componentWillMount() {
	}

	render() {
		return (
			<li className="rebelchat-mar-btm rebelchat-server-message" >
				<div className="rebelchat-media-right">
					<img
						className="rebelchat-img rebelchat-img-sm"
						src="https://firebasestorage.googleapis.com/v0/b/rebelchat-53a46.appspot.com/o/avatars%2Fman2.svg?alt=media&token=f12b4ffc-883c-441f-8794-2914356b1a3f"
					/>
					<div className="rebelchat-media-body rebelchat-pad-hor rebelchat-speech-right">
					 	<div className="rebelchat-speech">
							<a className="rebelchat-media-heading">
								<b className="rebelchat-chat-name">
									Client
								</b>
							</a>
						</div>
					</div>
				</div>
			</li>
		)
	}

}
