import React from 'react';

class Form extends React.Component{
	constructor(){
		super();
		this.state ={
			input:'',
			textarea:'',
			select:'',
			radio:'',
			checkbox: true
		}
	}
	handleSubmit(e){
		e.preventDefault()
		e.target.reset()
	}
	handleChange(e){
		this.setState({input: e.target.value})
		console.log(e.target.value)
	}
	textareaChange(e){
		this.setState({textarea: e.target.value})
		console.log(e.target.value)
	}
	handleSelect(e){
		this.setState({select: e.target.value})
		console.log(e.target.value)
	}
	handleRadio(e){
		this.setState({radio: e.target.value})
		console.log(e.target.value)
	}
	handleCheckbox(e){
		this.setState({checkbox: e.target.checked})
	}
	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type='text' placeholder='name' value={this.state.value} onChange={this.handleChange.bind(this)}/><br/>
					<input type='text' placeholder='age' value={this.state.value} defaultValue='123' ref={input => this.input = input}/><br/>
					<textarea value={this.state.textarea} onChange={this.textareaChange.bind(this)}/><br/>
					<select value={this.state.value} onChange={this.handleSelect.bind(this)}>
						<option value='grapefruit'>Grapefruit</option>
						<option value='lime'>Lime</option>
					</select>
					<select onChange={this.handleSelect.bind(this)}>
						<option value='grapefruit'>Grapefruit</option>
						<option value='lime'>Lime</option>
					</select><br/>
					男<input type='radio' name='goodRadio' defaultChecked defaultValue='boy' onChange={this.handleRadio.bind(this)}></input>
					女<input type='radio' name='goodRadio' defaultValue='girl' onChange={this.handleRadio.bind(this)}></input><br/>
					同意
					<input type='checkbox' checked={this.state.checkbox} onChange={this.handleCheckbox.bind(this)}/>
					<button>提交</button>
				</form>
			</div>
			)
	}
}
export default Form;