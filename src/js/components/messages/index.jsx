import React from 'react';
import { connect } from "react-redux";
import {IconButton, Menu, MenuItem, Textfield } from 'react-mdl';

@connect((store) => {
	return {
		selectedUser: store.users.selectedUser,
	}
})
export default class Messages extends React.Component {

	componentWillMount() {
	}

	render() {
		const {label, id} = this.props.selectedUser;
		return (
			<section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
				<div className="mdl-card mdl-cell mdl-cell--12-col">
					<h5 className="mdl-cell mdl-cell--12-col chat-title">
						{label}
					</h5>
					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
						<div className="section__text mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
					</div>
					<div className="mdl-card__actions card-actions">
						<div className="mdl-grid">
							<div className="mdl-cell mdl-cell--12-col" style={{display:'inherit'}}>
								<Textfield
									onChange={() => {}}
									label="Message..."
									style={{width: '100%'}}
								/>
								<IconButton name="send" colored	title="Send message" style={{"margin-top":"10px"}}/>
							</div>
						</div>
					</div>
				</div>
				<div className="button-menu">
					<IconButton name="more_vert" id="demo-menu-lower-left" />
					<Menu target="demo-menu-lower-left" align="right">
							<MenuItem>Some Action</MenuItem>
							<MenuItem>Another Action</MenuItem>
							<MenuItem disabled>Disabled Action</MenuItem>
							<MenuItem>Yet Another Action</MenuItem>
					</Menu>
				</div>
			</section>
		)
	}

}
