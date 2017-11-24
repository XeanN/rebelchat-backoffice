import React from 'react';
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import { toogleLobbySidebar } from '../actions/ui';
import { watchClientAddedEvent, setClientSelected } from '../actions/client';
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import { NavBar } from '../components/lobby/navbar';
import { UserList } from '../components/lobby/userlist';
import { ChatZone } from '../components/lobby/chatzone';
import { FaCog, FaSignOut } from 'react-icons/lib/fa';
import '../styles/containers/lobby.css';

class LobbyContainer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<UserList
					clients={this.props.clients}
					sidebarCssClass={this.props.sidebarCssClass}
					loadingClients={this.props.loadingClients}
					setClientSelected={this.props.setClientSelected}
				/>
				<div id="lobby-content">
					<NavBar
						logout={this.props.logout}
						toogleLobbySidebar={this.props.toogleLobbySidebar}
					/>
					<ChatZone
						selectedClient={this.props.selectedClient}
						watchMessagesAddedEvent={this.props.watchMessagesAddedEvent}
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
	selectedClient: state.client.selected
});

const mapDispatchToProps = dispatch => {
	watchClientAddedEvent(dispatch);
	return bindActionCreators(
		{
			logout,
			toogleLobbySidebar,
			setClientSelected,
			watchMessagesAddedEvent
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
