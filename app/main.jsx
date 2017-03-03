// import { Router, hashHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import EmpleadoList from './components/empleado-list';
// import routes from './routes.jsx';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MixPanel from './services/MixPanel';
// import Intercom from './services/Intercom';
// import Config from './config';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// MixPanel.init(Config.MIXPANEL);
// Intercom.init(Config.INTERCOM);
//injectTapEventPlugin();
// const route = (
//		 <MuiThemeProvider muiTheme={getMuiTheme()}>
//				 <Router history={hashHistory}>{routes}</Router>
//		 </MuiThemeProvider>
// );
let empleados = [
	{ id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
	{ id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
	{ id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" },
	{ id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
	{ id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado05.png" },
	{ id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado06.png" },
	{ id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado07.png" },
	{ id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado08.png" },
	{ id: 9, fullName: "Bernard Jungaaa", title: "DevOps Engineer", department: "Engineering", pic: "empleado09.png" },

]
const app	= (<EmpleadoList listado={empleados}/>);
ReactDOM.render(app, document.getElementById("app"));
console.log(
	' %c STOP: %c You shall not pass ',
	'color: red; font-weight: bold; font-size:20px;',
	'color:green;font-size:20px;'
);
