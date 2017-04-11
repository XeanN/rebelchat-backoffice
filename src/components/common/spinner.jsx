import React from 'react';
import ReactDOM from 'react-dom';

export default class Spinner extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			show : props.show,
			label: props.label,
			class: props.class
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}

	render() {
		let aditionalclass = '';
		switch (this.state.class) {
			case 'red':
				aditionalclass += '-red';
				break;
		}
		let bodyComponent = (
			<div className="wrap">
				<div className="loading">
					<div className={"bounceball" + aditionalclass }></div>
					<div className={"text" + aditionalclass}>
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
