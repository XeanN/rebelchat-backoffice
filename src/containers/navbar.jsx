import React from 'react';
import { connect } from "react-redux";
import { logout } from '../actions/auth';
import { toogleLobbySidebar } from '../actions/ui';
import { watchClientAddedEvent } from '../actions/client';
import { bindActionCreators } from 'redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaCog, FaSignOut } from 'react-icons/lib/fa';

class NavBarContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar color="faded" light expand="md">
				<NavbarBrand href="javascript:void(0)" onClick={this.props.toogleLobbySidebar}>
					<img src="/images/logo.png" width="30" height="30" alt="" />
					<span className="nav-title">#Lobby</span>
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/components/" title="Settings">
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
			</Navbar>
		);
	}
};


const mapDispatchToProps = dispatch => {
	console.log('test');
	watchClientAddedEvent(dispatch);
	return bindActionCreators(
		{
			logout,
			toogleLobbySidebar,
		}, dispatch
	)
}

export default connect(null, mapDispatchToProps)(NavBarContainer);
