import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Sidebar from './sidebar';
import Container from './container';

export default class Layout extends React.Component {
	constructor () {
		super();
		this.state = {}
	}

	render(){
		// let title = this.getTitle();
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
				<Sidebar/>
				<Header/>
				<Container>
					{
						this.props.children ?
							this.props.children
						:
							<h1> Empty </h1>
					}
				</Container>
			</div>
		);
	}
}
