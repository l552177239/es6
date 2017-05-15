import React from 'react';

class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			text: ' ',
			show: true
		}
	}
	handleClick(text){
		console.log(this.input.value)
		this.setState({
			text:this.input.value	
			})
	}
	render(){
		let styles = {
			header: {
				width: '100%',
				background: '#00BCD4'
			},
			nav:{
				width:'100%',
				height:'80px',
				lineHeight:'80px'
			},
			seach:{
				textAlign:'center',
				padddingTop:'100px',
				paddingBottom:'55px',
				marginBottom:'30px',
				backgroundColor:'#00bcd4'
			},
			input:{
				width:'100%',
				height:'35px',
				maxWidth:'360px',
				border:'2px solid #00bcd4',
				paddingLeft:'10px',
				paddingRight:'10px',
				postion:'absolute'
			},
			button:{
				color:'white',
				height:'32px',
				border:'none',
				fontSize:'16px',
				cursor:'pointer',
				borderRadius:'3px',
				paddingLeft:'10px',
				paddingRight:'10px',
				backgroundColor:'#ff4081'
			},
			p:{
				maxWidth:'360px',
				height:'30px',
				margin:'0 auto',
				backgroundColor:'white',
				postion:'relative',
				zIndex:'2',
				display:'none'
			}
		}

		return (
			<div className='header' style={styles.header}>
				<div className='nav'>
					<a href="./index.js">首页</a>
				</div>
				<form action='' className='seach' style={styles.seach}>
					<input type="text" style={styles.input} onChange={(input) => this.input =input}/>
					<button type="submit" style={styles.button} onClick={this.handleClick.bind(this)}>搜索</button>
				</form>
			</div>
			)
	}
}
export default Header;