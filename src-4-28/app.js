import React from 'react';

class App extends React.Component{
	handleClick(){
		this.input.focus()
		console.log(this.aaa)
	}
	render(){
		return (
			<div>
				<p ref={(test) => this.aaa = test}>1</p>
				<input placeholder='输入' ref={(input) => this.input =input}></input>
				<button onClick={this.handleClick.bind(this)}>点击</button>
			</div>
		)
	}
}
export default App;