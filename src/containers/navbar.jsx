import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import { toogleLobbySidebar } from '../actions/ui';
import { watchClientAddedEvent } from '../actions/client';
import { watchNotificationsSettingsChangedEvent } from '../actions/notifications';
import { bindActionCreators } from 'redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaCog, FaSignOut } from 'react-icons/lib/fa';
import { database } from '../lib/firebase';

class NavBarContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			modal: false
		};
		this.toggle = this.toggle.bind(this);
		this.openModal = this.openModal.bind(this);
		this.changeNotificationSettings = this.changeNotificationSettings.bind(this);
	}

	componentDidMount(){
		this.props.watchNotificationsSettingsChangedEvent();
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	openModal () {
		this.setState({
			modal: !this.state.modal
		});
	}

	changeNotificationSettings(){
		var web = this.webCheckbox.checked? 1:0,
			sound = this.soundCheckbox.checked? 1:0;
		this.openModal();
		if(localStorage){
			localStorage.setItem("webNotifications",web);
			localStorage.setItem("soundNotifications",sound);
		}
		database.ref('notifications/admin/').set({
			webNotifications: web,
			audioNotifications: sound
		});
	}

	render() {
		var {webNotifications, soundNotifications} = this.props;
		return (
			<Navbar color="faded" light expand="md">
				<NavbarBrand href="javascript:void(0)" onClick={this.props.toogleLobbySidebar}>
					<img src="/images/logo.png" width="30" height="30" alt="" />
					<span className="nav-title">{this.props.selectedClient? this.props.selectedClient.name : "#Lobby"}</span>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="#" title="Settings" onClick={this.openModal}>
								<FaCog className="nav-option-icon" size={30} />
								<span className="nav-option-text">Settings</span>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#" title="Log Out" onClick={this.props.logout}>
								<FaSignOut className="nav-option-icon" size={30} />
								<span className="nav-option-text">Log Out</span>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<Modal isOpen={this.state.modal} toggle={this.openModal} className="rebelchat-modal-content">
				<ModalHeader toggle={this.openModal} className="rebelchat-modal-header">
				CHAT SETTINGS
				</ModalHeader>
				<ModalBody className="rebelchat-modal-body">
					<div className="exp">
					<div className="checkbox"><form><div>
			 			<input type="checkbox" ref={el => { this.soundCheckbox = el; }} id="rebelchat-audio" name="check" value="" defaultChecked={soundNotifications} />
			 			<label htmlFor="rebelchat-audio">
			   			<span></span>Enable sounds notifications
			 			</label></div></form></div>
						</div>
						<div className="exp">
						<div className="checkbox"><form><div>
						<input type="checkbox" ref={el2 => { this.webCheckbox = el2; }} id="rebelchat-webNoti" name="check1" value="" defaultChecked={webNotifications} />
						<label htmlFor="rebelchat-webNoti">
						<span></span>Enable web notifications
						</label></div></form></div>
					</div>
				</ModalBody>
				<ModalFooter className="rebelchat-modal-footer">
					<Button className="rebelchat-btn rebelchat-btn-main" color="primary" onClick={this.changeNotificationSettings}>Save</Button>
				</ModalFooter>
				</Modal>
			</Navbar>
		);
	}
};

const mapStateToProps = state => ({
	selectedClient: state.client.selected,
	webNotifications: state.enablenotifications.webNotifications,
	soundNotifications: state.enablenotifications.soundNotifications
});

const mapDispatchToProps = dispatch => {
	watchClientAddedEvent(dispatch);
	return bindActionCreators(
		{
			logout,
			toogleLobbySidebar,
			watchNotificationsSettingsChangedEvent: watchNotificationsSettingsChangedEvent
		}, dispatch
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
