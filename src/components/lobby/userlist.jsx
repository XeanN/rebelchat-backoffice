import React from 'react';

export class UserList extends React.Component {

	constructor(props) {
		super(props);
	}

	generateList(clients) {
		const arr = [];
		const mclients = [];
		Object.keys(clients).forEach((key) => {
			mclients.push(
				{
					key,
					...clients[key]
				}
			)

		});
		const sortclients = mclients.sort(function (a, b) {
			return b.lastActivity - a.lastActivity;
		});

		sortclients.forEach((client) =>{
			arr.push(
				<li key={client.key}>
					<a id={client.key} href = "#" >
						{client.email}
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

