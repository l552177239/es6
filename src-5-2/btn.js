import React from 'react';
import PropTypes from 'prop-types'

class Btn extends React.Component{
	constructor(){
	super();
	this.state = {
		num: 0,
		show: true
	}
}
	handleClick(){
		console.log(1)
		this.setState({
			show:!this.state.show
		})
	}
	render(){
		let styles = {
			btn:{
				border:'none',
				color: 'white',
				margin:'5px',
				padding:`${this.props.padding || 10 }px`,
				background:this.state.show ? (this.props.bg || 'teal') : 'hotpink',
				fontSize:this.props.fs,
				transition:'all 2s'
			}
		}
		return (
				<button style={styles.btn} onClick={this.handleClick.bind(this)}>{this.props.title||'btn'}</button>
			)
	}
}

Btn.defaultProps = {
	title:'点击',
	fs:'16px'
}
Btn.propTypes = {
	title:PropTypes.string,
	fontSize:PropTypes.number

}	
export default Btn; 