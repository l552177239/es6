import React from 'react';
import Test from './test';

class App extends React.Component{
	constructor(props){
		super(props)		
		this.state = {
			name:this.props.name,
			num:0,
			destroy:false
		}
		console.log("constructor")
	}	
	componentWillMount(){
		console.log("will mount")
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log('should update')
		console.log(nextProps,nextState)
		return nextState.num <= 10 ? true : false
	}
	componentWillUpadte(nextProps,nextState){
		console.log('will update')
		console.log(nextProps,nextState)
	}
	componentDidUpdate(prevProps,prevState){
		console.log('did update')
		console.log(prevProps,prevState)
	}
	render(){
		console.log('render')
		return (
			<div style={{textAlign:'center'}}>
			{this.state.num}<br/><button style={{margin:'5px'}} onClick={()=>this.setState({num:this.state.num + 1})}>点击</button>
			<button style={{margin:'5px'}} onClick={()=>this.state.num>0?this.setState({num:this.state.num - 1}):this.state.num}>点击</button>
			
			<button onClick={() =>this.setState({destroy:true})}>销毁组件</button>
			{this.state.destroy?null:<Test num={this.state.num}/>}
			</div>
			)
	}
	componentDidMount(){
		console.log("did mount")
	}
}
export default App;