import React from 'react';
class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			num: 0,
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
	handleClick(){
		this.setState( prevState => ({num: prevState.num + 1}) )
	}
	render(){
		return (
			<div className='Main'>
				{this.state.num}<button onClick={this.handleClick.bind(this)}>+1</button>
				{this.state.date.map((item,index) => 
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