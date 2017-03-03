import React from 'react';
// import EmpleadoRow from '../empleado-row'

export default class EmpleadoList extends React.Component {

	render() {
		return (
			<ul className="media-list">
				{
					this.props.listado.map((empleado, i) => {
						return <p key={i}>{empleado.fullName}</p>
					})
				}
			</ul>
		)
	}
};
