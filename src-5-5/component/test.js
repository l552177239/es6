import React from 'react';
import {withRouter} from 'react-router'

class Home extends React.Component{
	render(){
		console.log('====',this.props);
		return (
			<div>
				<button>返回</button>
				Home
			</div>
			)
	}
}
export default withRouter(Home);