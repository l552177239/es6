import React from 'react';

class Card extends React.Component{
	render(){
		return(
			<div>
				{this.props.childer}
			</div>
			)
	}
}
export default Card;