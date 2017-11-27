import React from 'react';
import { connect } from "react-redux";
import { watchMessagesAddedEvent } from '../actions/messages';
import { bindActionCreators } from 'redux';
import ClientListContainer  from '../containers/clientlist';
import NavBarContainer  from '../containers/navbar';
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
					<NavBarContainer/>
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
			watchMessagesAddedEvent
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
