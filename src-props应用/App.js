import React from 'react'
import Post from './Post'
import Comment from './Comment'

class App extends React.Component {
	constructor(){
		super()
		this.handleComment = this.handleComment.bind(this)
	}
	state = {
		comment:''
	}
	handleComment(text){
		this.setState({
			comment:text
		})
	}
	render() {
		
		return(
			<div>
			<Post />
			<div>输入：{this.state.comment}</div>    
			<Comment change={this.handleComment}/>
			</div>
		)
	}
}
export default App