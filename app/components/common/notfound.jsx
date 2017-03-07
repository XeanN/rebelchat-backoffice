import React from 'react';

export default class NotFound extends React.Component{
	constructor () {
		super();
	}

	render(){
		return (
			<div className="content">
				<canvas id="snow" className="snow"></canvas>
				<div className="main-text">
					<h2>
						<img src="images/logo2.png" width="400" height="auto" />
						<br/>
						That page has gone missing.
					</h2>
				</div>
				<div className="ground">
					<div className="mound">
						<div className="mound_text">404</div>
						<div className="mound_spade"></div>
					</div>
				</div>
			</div>
		);
	}
}
