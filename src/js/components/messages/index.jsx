import React from 'react';
import { connect } from "react-redux";

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
					<div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
						<h4 className="mdl-cell mdl-cell--12-col">
							{label}
						</h4>
						<div className="section__text mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
							HERE COMES THE MESSAGES!
						</div>
					</div>
				</div>
			</section>
		)
	}

};
