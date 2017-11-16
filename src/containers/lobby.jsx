import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import '../styles/containers/lobby.css';

export class LobbyContainer extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toogleSideBar = this.toogleSideBar.bind(this);
		this.state = {
			isOpen: false,
			cssclass: ''
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	toogleSideBar() {
		let { cssclass } = this.state;
		if ( cssclass ) {
			cssclass = ''
		} else {
			cssclass = 'active'
		}
		this.setState({
			cssclass
		})
	}

	render() {
		const { cssclass } = this.state;
		return (
			<div className="wrapper">
				<nav id="sidebar" className={cssclass}>
					<div id="sidebar-wrapper">
						<div className="sidebar-header">
							<h3>Company Name</h3>
						</div>
						<ul className="list-unstyled components">
							<li><a href="#">User 1</a></li>
							<li><a href="#">User 2</a></li>
							<li><a href="#">User 3</a></li>
							<li><a href="#">User 4</a></li>
						</ul>
					</div>
				</nav>
				<div id="content">
					<Navbar color="faded" light expand="md">
						<NavbarBrand href="javascript:void(0)" onClick={this.toogleSideBar}>
							<img src="/images/logo.png" width="30" height="30" alt="" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/components/">Components</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
					<h2>Collapsible Sidebar Using Bootstrap 3</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<div className="line"></div>

					<h2>Lorem Ipsum Dolor</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<div className="line"></div>

					<h2>Lorem Ipsum Dolor</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<div className="line"></div>

					<h3>Lorem Ipsum Dolor</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer);
