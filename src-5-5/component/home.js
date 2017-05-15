import React from 'react';

class Home extends React.Component{
	// componentDidMount(){
	// 	setTimeout(() => {
	// 		this.props.history.push('/About')
	// 	},3000)
	// }
	handleClick(){
		this.props.history.goForward()
	}
	render(){
		console.log('====',this.props);
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>返回</button>
				Home
			</div>
			)
	}
}
export default Home;