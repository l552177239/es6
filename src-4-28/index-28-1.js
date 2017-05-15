import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
let eats = 
['芒果','草莓','香蕉','菠萝','西瓜','柚子','橘子','橙子'];
class App extends React.Component{	
	constructor(){
		super();
		this.state = {
			state: false,
			which: '',
			what: []
		}
	}
	getRandom(m,n){
			return 	Math.floor(Math.random()*(n-m) + m)
	}
	renderBg(){
		let oldWhat = this.state.what;
		for(var i=0;i<oldWhat.length;i++){
			if(oldWhat.opacity<=0){
				oldWhat.splice(i,1);
				i--;//数组删除时
			}else {
				oldWhat[i].opacity -= 10
				}
		}
		if(this.state.start && oldWhat.length<10){
			oldWhat = [
				...oldWhat,
				{
					top:this.getRandom(0,100),
					left:this.getRandom(0,100),
					opacity:100,
					title:eats[Math.floor(Math.random()*eats.length)],
					id:Date.now()
				}
			]
		}
		if(oldWhat.length===0){
			clearInterval(this.startBg);
		}
		this.setState({what:oldWhat})
		console.log(1)
	}
	handleStart(){
		clearInterval(this.stateEats)
		if(!this.state.which){
			clearInterval(this.startBg)
			this.stateEats = setInterval( () => {
				this.setState({which:eats[Math.floor(Math.random()*eats.length)]})
			},100)
			this.startBg = setInterval( () => this.renderBg(),100)
		}
		this.setState({start: !this.state.start})
	}
	render(){
		let styles = {
			button:{
				width:'80px',
				height:'40px',
				borderRadius:'2px',
				marginTop:'50px'
			}
		}
		return (
			<div className='play'>
			<div>
			{
				this.state.what.map( item => <p key={item.id} style={{top:`${item.top}vh`,left:`${item.left}vw`,opacity:`${item.opacity/100}`}}>{item.title}</p>
					)
			}				
			<h1>今天吃：{this.state.which}</h1>
			<button onClick={this.handleStart.bind(this)} style={styles.button}>{this.state.start? '停止': '开始'}</button>
			</div>
			</div>
			)
	}
}
ReactDom.render(<App/>,document.querySelector('#root'))