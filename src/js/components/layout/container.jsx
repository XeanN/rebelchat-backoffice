import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{

	constructor () {
		super();
	}

	render(){
		return (
			<main className="mdl-layout__content mdl-color--grey-100">
				<div className="mdl-layout__tab-panel is-active">
					{this.props.children}
				</div>
			</main>
		);
	}
}
