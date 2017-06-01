import React from 'react'

class Comment extends React.Component{
	handlechange(){
		return this.props.change(this.text.value)
	}
	render(){
		return(
			<div className='comment'>
				<div>
					<form>
						<input ref={(value) => this.text = value} onChange={this.handlechange.bind(this)}/>
						<button>+</button><br />
						<button>all</button>
						<button>完成</button>
					</form>
				</div>
			</div>
			)
	}
}
export default Comment