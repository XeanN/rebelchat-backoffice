import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactMDL from 'react-mdl';

injectTapEventPlugin();

window.React = React;

export default class App extends React.Component{

	constructor () {
		super();
	}

	render(){
		return (this.props.children);
	}

}
