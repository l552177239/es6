import React from 'react';

class MultipleForm extends React.Component{
  constructor(){
    super()
    this.state={
      text: '',
      textarea: '',
      radio:'',
      checkbox: true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let obj = {
      text: this.state.text,
      radio: this.state.value,
      textarea: this.state.textarea,
      checkbox: this.state.checkbox,
    }
    console.log(obj);
  }
  handleInput(e){
    let target = e.target;
    console.log(target.name);
    let value = (target.name==='checkbox' ? target.checked : target.value)
    this.setState({
      [target.name]: value
    })
    console.log(target.value)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.text} name='text' onChange={this.handleInput.bind(this)} /><br/>
          男<input type='radio' name='goodRadio' defaultChecked defaultValue='boy' onChange={this.handleInput.bind(this)}></input>
          女<input type='radio' name='goodRadio' defaultValue='girl' onChange={this.handleInput.bind(this)}></input><br/>
          <textarea value={this.state.textarea} name='textarea' onChange={this.handleInput.bind(this)} /><br/>
          同意
          <input type='checkbox' checked={this.state.checkbox} name='checkbox' onChange={this.handleInput.bind(this)}/>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default MultipleForm;