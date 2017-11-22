import React from 'react';

export class UserList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { sidebarCssClass } = this.props;
		return (
			<nav id="sidebar" className={sidebarCssClass}>
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
		);
	}
};

