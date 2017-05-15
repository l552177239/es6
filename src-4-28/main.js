import React from 'react';
import './index.css';
import ReactDom from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = { num: 0}
	}
	startCount(){
		clearInterval(this.interval)
		this.interval = setInterval(()=>this.setState({num:this.state.num + 1}
			),1000)
	}
	render(){
		let styles = {
			button:{
				border:'1px solid black'
			}
		}
		return (
			<div>
			{this.state.num}<br/> 
			<button onClick={this.startCount.bind(this)} style={styles.button}>开始</button>
			<button onClick={this.startCount.bind(this)} style={styles.button}>暂停</button>
			</div>
			)
	}
}
ReactDom.render(<App/>,document.querySelector('#root'))