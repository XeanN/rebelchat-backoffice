import React from 'react';
import { Tooltip } from 'reactstrap';

export class UserList extends React.Component {

	constructor(props) {
		super(props);
	}

	// CREATE CLIENT OBJECT WITH THE KEY AS PROPERTY
	mapClientWithKey(clients) {
		const mclients = [];
		Object.keys(clients).forEach((key) => {
			mclients.push(
				{
					key,
					...clients[key]
				}
			)
		});
		return mclients;
	}

	//SORT CLIENTS BY LAST ACITIVITY TIMESTAMP
	sortClientsByLasActivity(clients) {
		return clients.sort(function (a, b) {
			return b.lastActivity - a.lastActivity;
		});
	}

	prepareEmail(email) {
		const tokens = email.split('@');
		return `@${tokens[0]}`;
	}

	getTooltipText(client) {
		return `${client.email} - ${client.name}`;
	}

	generateList(clients) {
		const arr = [];
		const { loadingClients } = this.props;
		if ( loadingClients ) {
			return (
				// TODO: MAKE A BETTER LOADING STATE
				<div>
					Loading clients...
				</div>
			)
		} else {
			if ( clients && Object.keys(clients).length ) {
				const mclients = this.mapClientWithKey(clients);
				const sortclients = this.sortClientsByLasActivity(mclients);
				sortclients.forEach((client) =>{
					arr.push(
						<li key={client.key} className="client" title={this.getTooltipText(client)}>
							<a id={client.key} href = "#">
								{this.prepareEmail(client.email)}
							</a>
						</li>
					)
				});
			}
			return arr;
		}
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

