import React from 'react';
import {HashRouter,BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';

import Home from './component/home';
import About from './component/about';
import Seach from './component/seach';

import './main.css';

const Work = (props) => {
	return(
		<div>
			Work
		</div>
	)
}
let NotFound = () => <div><h1>404</h1><Link to='/'>回到首页</Link></div>
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			admin:true
		}
	}
	render(){
		// console.log(this.props)
		return (
			<HashRouter>
			<div>
			<h1>App</h1>
			<NavLink to='/' exact activeClassName='active'>首页</NavLink>
			<NavLink to='/about' style={{margin:'10px'}} activeClassName='active'>About</NavLink>
			<NavLink to='/work/:work' activeClassName='active'>Work</NavLink>
			<NavLink to='/seach'style={{margin:'10px'}} activeClassName='active'>Seach</NavLink>
			<NavLink to='/wor' activeClassName='active'>1234</NavLink>
			<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/about' render={props => this.state.admin ? <About {...props}/> : <Redirect to='/'/>} />
			<Route path='/work' component={Work} />
			<Route path='/seach' component={Seach} />
			<Redirect from='/old' to='/home'/>
			<Route path='/404' component={NotFound} />
			<Redirect from='*' to='404'/>
			</Switch>
			<p>版权所有</p>
			</div>
			</HashRouter>
			)
	}
}
export default App;