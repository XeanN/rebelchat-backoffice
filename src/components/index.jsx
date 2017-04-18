import React from 'react';

export default class Index extends React.Component{
	
		constructor(props) {
				super(props);
		}

		render() {

			return (
				<div>
					<h1>You should not see this.</h1>
					{this.props.children}
				</div>
			);
		}
}
