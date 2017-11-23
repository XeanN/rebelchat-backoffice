import React from 'react';
import { Alert } from 'reactstrap';
import { auth } from '../../lib/firebase';

export class ChatZone extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		// TODO: GET CURRENT USER FROM LOCALSTORAGE
		return (
			<div id="chat-zone-container" className="container">
				<Alert color="light">
					Welcome Admin, This is your space. You can see the basic backoffice's features and configure it in different ways
				</Alert>
			</div>
		)
	}
};

