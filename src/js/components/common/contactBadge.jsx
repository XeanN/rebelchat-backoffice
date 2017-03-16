import React from 'react';
import ReactDOM from 'react-dom';

export default class ContactBadge extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			count: parseInt(props.count)
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	}

	render() {
		return (
			this.state.count != 0 ?
				<span className="mdl-badge" data-badge={this.state.count}></span>
			:
				null
		)
	}
}
