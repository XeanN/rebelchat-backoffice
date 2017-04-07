import React from 'react';
import ReactDOM from 'react-dom';

export default class Spinner extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			show : props.show,
			label: props.label
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}

	render() {
		let bodyComponent = (
			<div className="wrap">
				<div className="loading">
					<div className="bounceball"></div>
					<div className="text">
						{ this.state.label }
					</div>
				</div>
			</div>
		);
		return (
			<div id="spinner-main-container">
				{ this.state.show ? bodyComponent : null }
			</div>
		)
	}
}
