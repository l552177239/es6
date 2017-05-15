import React from 'react';

class Test extends React.Component{
	constructor(props){
		super(props)		
		this.state = {
			name:this.props.name,
			num:0
		}
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log('test should update')
		console.log('test',nextProps,nextState)
		return nextState.num <= 10 ? true : false
	}
	componentWillUpadte(nextProps,nextState){
		console.log('test will update')
		console.log('test',nextProps,nextState)
	}
	componentDidUpdate(prevProps,prevState){
		console.log('test did update')
		console.log('test',prevProps,prevState)
	}
	componentWillReceiveProps(nextProps){
		console.log('test will rece',nextProps)
	}
	componentWillUnmount(){
		console.log('test unmount')
	}
	render(){
		console.log('test render')
		return (
			<div>
			test：{this.props.num}
			</div>
			)
	}
}
export default Test;