import React from 'react';
import Btn from './btn';
import Card from './card'

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			date:[
				{index:1,title:'first',date:'2017.5.2'},
				{index:2,title:'second',date:'2017.5.3'},
				{index:3,title:'third',date:'2017.5.4'},
				{index:4,title:'fourth',date:'2017.5.5'}
			]
		}
	}
	render(){
		return (
			<div>
				<Btn title='注册' padding={20}/>
				<Btn title='登录' bg={'red'}/>
				<Btn title='取消' fontSize={'20px'}/>
				<Btn/>
				<Btn/>
				{
					this.state.date.map(item =>
						<Card key={item.index} {...item}/>)
				}
			</div>

			)
	}
}
export default App;