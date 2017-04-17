import React from 'react';
import { Textfield } from "react-mdl";
import  User  from "../../models/user";

export default class Login extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange(key, event) {
		const state = this.state;
		state[key] = event.target.value
		this.setState(state);
	}

	login(event) {
		event.preventDefault();
		User.login(this.state).then((data, test, a) => {
			console.log(data, test, a);
			document.location.hash = "#/lobby/home";
		}).catch( error=>{
			console.log(error);
		})
	}

	render() {
		const buttonClasses = "login-button mdl-button mdl-js-button "
			+ "mdl-button--raised mdl-js-ripple-effect mdl-color--cyan-500 "
			+ "mdl-color-text--white";
		return (
			<div className="login-bg text-center">
				<div className="login-container mdl-shadow--2dp">
					<img src="images/logo.png" width="150px" height="auto"/>
					<form>
						<Textfield
							label="Email"
							onChange={(this.handleChange.bind(this, 'email'))}
							style={{'width':'100%'}}
						/>
						<Textfield
							label="Password"
							onChange={this.handleChange.bind(this, 'password')}
							type="password"
							style={{'width':'100%'}}
						/>
						<button
							onClick={this.login.bind(this)}
							disabled={this.state.loading}
							className = { buttonClasses }
							>
							Log In
						</button>

					</form>
				</div>
			</div>
		);
	}

};
