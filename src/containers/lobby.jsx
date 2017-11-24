import React from 'react';
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import { toogleLobbySidebar } from '../actions/ui';
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import { NavBar } from '../components/lobby/navbar';
import ClientListContainer  from '../containers/clientlist';
import { ChatZone } from '../components/lobby/chatzone';
import '../styles/containers/lobby.css';

class LobbyContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<ClientListContainer />
				<div id="lobby-content">
					<NavBar
						logout={this.props.logout}
						toogleLobbySidebar={this.props.toogleLobbySidebar}
					/>
					<ChatZone
						selectedClient={this.props.selectedClient}
						watchMessagesAddedEvent={this.props.watchMessagesAddedEvent}
						messages={this.props.messages}
					/>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	sidebarCssClass: state.ui.sidebarCssClass,
	clients: state.client.list,
	loadingClients: state.client.loading,
	selectedClient: state.client.selected,
	messages: state.message.list
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			logout,
			toogleLobbySidebar,
			watchMessagesAddedEvent
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
