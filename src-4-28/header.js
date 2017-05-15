import React from 'react';
class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			num: 0,
			tab: 0,
			show: true
		}
	}
	handleClick(tab){
		this.setState({num:this.state.tab})
	}
	render(){
		let styles = {
			header:{
				width:'100%',
				height:'100px',
				backgroundColor:'#ccc'
			},
			left:{
				fontSize:'22px',
				color:'black'
			},
			a:{
				width:'60px',
				height:'30px',
				display:'block',
				fontSize:'18px',
				lineHeight:'30px',
				textAlign:'center',
				borderRadius:'5px',								
				backgroundColor:'teal'
			}
		}
		return (
			<div className='header clearfix' style={styles.header}>
				<div className='nav'>
					<div className='left' style={styles.left}>Project name</div>
					<div className='right'>
						<a href='#' style={styles.a}>Home</a>
						<a href='#'>About</a>
						<a href='#'>Contact</a>
					</div>
				</div>
				<div className='banner'></div>
			</div>
		)
	}
};
export default Header;