import React from 'react';
import { connect } from "react-redux";
import { Alert } from 'reactstrap';
import { auth } from '../../lib/firebase';
import { watchMessagesAddedEvent } from '../../actions/messages';
import '../../styles/components/chatZone.css';

export class ChatZone extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.selectedClient ) {
			this.props.watchMessagesAddedEvent(
				this.props.selectedClient
			);
		}
	}

	render() {

		// TODO: GET CURRENT USER FROM LOCALSTORAGE
		return (
			<div id="chat-zone-container" className="container">
				<Alert color="light">
					Welcome Admin, This is your space. You can see the basic backoffice's features and configure it in different ways
				</Alert>
					<ul className="messages">
						<li className="message left appeared">
							<div className="avatar"></div>
							<div className="text_wrapper">
								<div className="text">
									AAAAAAAAA
								</div>
							</div>
						</li>
						<li className="message right appeared">
							<div className="avatar"></div>
							<div className="text_wrapper">
								<div className="text">
									AAAAAAAAA
									</div>
							</div>
						</li>
					</ul>
			</div>
		)
	}

};

