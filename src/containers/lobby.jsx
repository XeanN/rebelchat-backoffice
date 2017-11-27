import React from 'react';
import ClientListContainer  from '../containers/clientlist';
import NavBarContainer  from '../containers/navbar';
import ChatZoneContainer from '../containers/chatzone';
import '../styles/containers/lobby.css';

export default class LobbyContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<ClientListContainer />
				<div id="lobby-content">
					<NavBarContainer/>
					<ChatZoneContainer/>
				</div>
			</div>
		);
	}
};
