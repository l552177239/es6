import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component{
	render(){
		let styles = {
			div:{
				height:'10vh',
			},
			index:{	
				width:'80px',
				height:'80px',
				lineHeight:'80px',
				float:'left',
				color:'white',
				fontSize:'24px',
				textAlign:'center',
				backgroundColor:'teal'
			},
			h3:{
				height:'80px',
				backgroundColor:'#ccc'
			}
		}
		return(
			<div style={styles.div}>
				<div style={styles.index}>{this.props.index}</div>
				<div style={styles.h3}>
					<h3>{this.props.title}</h3>
					<p>{this.props.date}</p>
				</div>
			</div>
			)
	}
}
Card.defaultProps = {
	index:0,
	title:'默认标题',
	date:'2017.5.2'
}
Card.propTypes = {
	title:PropTypes.string,
	date:PropTypes.number

}
export default Card;