import React from 'react';

class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			value: '',
			date:[
				{index:1,title:'vim 联手 ctags 追踪代码',date:'2011年12月21日'},
				{index:2,title:'用 vim 插件 snipmate 编写代码片段',date:'2011年12月28日'},
				{index:3,title:'在ubuntu 系统下ssh 登录服务器',date:'2012年1月7日'},
				{index:4,title:'Git 的基本配置和使用',date:'2012年1月13日'},
				{index:5,title:'Git 工作流',date:'2012年1月15日'},
				{index:6,title:'利用 GitHub pages 搭建自己的网站',date:'2012年1月17日'},
				{index:7,title:'GitHub 的基本使用',date:'2012年2月4日'},
				{index:8,title:'Ubuntu 系统下的命令行使用小技巧',date:'2012年2月12日'},
				{index:9,title:'fuzzyfinder 文件查找',date:'2012年2月18日'},
				{index:10,title:'如何解决 push 更改到 GitHub 却被拒绝的问题',date:'2012年2月23日'},
			]
		}
	}
	handleInput(){
		this.setState({value:this.input.value})
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
		let newDate = this.state.value?
		this.state.date.filter(item => item.title.includes(this.state.value)):
		this.state.date
		return (
			<div className='header' style={styles.header}>
				<div className='nav'>
					<a href="./index.js">首页</a>
				</div>
				<form action='' className='seach' style={styles.seach}>
					<input type="text" style={styles.input} onChange={this.handleInput.bind(this)}/>
					<button type="submit" style={styles.button}>搜索</button>
				</form>
			</div>
			<div className='Main'>
				{
					newDate.map((item,index) => 
					<a className="item" href="#" key={item.index}>
					    <span className="left">{item.index}</span>
					    <span className="right">
					      <span className="title">{item.title}</span>
					      <span className="date">{item.date}</span>
					    </span>
					</a>
					)
				}
			</div>
			)
	}
}
export default Main;