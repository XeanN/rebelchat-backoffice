import React from 'react';

export class UserList extends React.Component {

	constructor(props) {
		super(props);
	}

	generateList(clients) {
		const arr = [];
		Object.keys(clients).forEach((key) => {
			arr.push(
				<li key={key}>
					<a id={key} href = "#" >
						{clients[key].email}
					</a>
				</li>
			)
		});
		return arr;
	}

	render() {
		const { sidebarCssClass, clients } = this.props;
		const list = this.generateList(clients);
		return (
			<nav id="sidebar" className={sidebarCssClass}>
				<div id="sidebar-wrapper">
					<div className="sidebar-header">
						<h3>Company Name</h3>
					</div>
					<ul className="list-unstyled components">
						{list}
					</ul>
				</div>
			</nav>
		);
	}
};

