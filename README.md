React

#####  1.使用 JSX   #####

我们在文件头部从 react 的包当中引入了 React 记住，和 React.js 的组件父类 Component 只要你要写React.js组件，那么就必须要引入这两个东西。

react-dom 可以帮助我们把这个用来描述 UI 信息的 JavaScript 对象（React 组件）变成 DOM 元素，并且渲染到页面上去
```js
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
```

ReactDOM.render 功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上  

所以可以总结一下从 JSX 到页面到底经过了什么样的过程  

<img src='http://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png' alt="ReactDOM">  

创建一个组件
```js
import React from 'react';
import ReactDOM from 'react-dom';
ReactDom.render(<div/>,document.querySelector('#root'))
```

#####  2.render方法  #####

一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素  

必须要用一个外层的 JSX 元素把所有内容包裹起来。返回并列多个 JSX 元素是不合法的（我们一般用一个div标签包裹）  

在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹  

在react中给元素添加类名：className  

JSX 可以放置任何表达式内容。所以也可以放 JSX，实际上，我们可以在 render 函数内部根据不同条件返回不同的 JSX
```js
render(){
  const GoodWord = true
  return (
    <div>
      <h1>
        React 小书
        {GoodWord
          ? <strong>good</strong>
          : <span>not good</span>
        }
      </h1>
    </div>
  )
}
```
#####  3.组件的组合、嵌套和组件树  #####

自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头  

组件可以和组件组合在一起，组件内部可以使用别的组件。就像普通的 HTML 标签一样使用就可以。这样的组合嵌套，最后构成一个所谓的组件树。

例：下面创建一个组件树 

假设页面是由 Header 、Main 、Footer 几个部分组成，由一个 Index 把它们组合起来

index.js组件（父组件）
```js
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

class Header extends Component {
  render () {
    return (
    <div>
      <Title />
      <h2>This is Header</h2>
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main content</h2>
    </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
    <div>
      <h2>This is footer</h2>
    </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.querySelector('#root'))
//querySelector()：JS原生选择器,类似jq中的$()选择器,功能强大;
//querySelector('#root')可以用getElementById('root')替代
```
创建组件title.js（子组件）
```js
import React from 'react';

class Title extends React.Component{
  render(){
    return(
         <h1>React 小书</h1>
    )
  }
}
export default Title;
```
<img src="http://huzidaha.github.io/static/assets/img/posts/19BBE4E2-A12E-4657-BA6A-61484F67FA60.png" alt="组件树">  

#####  4.事件监听  #####

当你需要为某个元素监听某个事件的时候，只需要简单地给它加上 on* 就可以了。而且你不需要考虑不同浏览器兼容性的问题  

React.js 会给每个事件监听传入一个 event 对象，这个对象提供的功能和浏览器提供的功能一致，而且它是兼容所有浏览器的。  

React.js 的事件监听方法需要手动 bind 到当前实例，这种模式在 React.js 中非常常用。

注意：事件属性名用驼峰命名法！！

事件监听只能用在普通的 HTML 的标签上，不能用在组件标签上！！

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleClick(){
    console.log('e.target.innerHTML')
  }
  render(){
    return (
    	<h1 onClick={this.handleClick}>打印标题</h1>
    )
  }
}
ReactDom.render(<Title/>,document.querySelector('#root'))
```

事件中的 this：如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js

bind：会把实例方法绑定到当前实例上，然后我们再把绑定后的函数传给 React.js 的 onClick 事件监听。这时候你再看看，点击 h1 的时候，就会把调用handleClick()实例方法打印出h1

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
  handleClick(){
    console.log('e.target.innerHTML')
  }
  render(){
    return (
    	<h1 onClick={this.handleClick.bind(this)}>打印标题</h1>
    )
  }
}
ReactDom.render(<Title/>,document.querySelector('#root'))
```

你也可以在 bind 的时候给事件监听函数传入一些参数：

```js
class Title extends Component {
  handleClick(){
    console.log('e.target.innerHTML')
  }
  render(){
    return (
    	<h1 onClick={this.handleClick.bind(this,'Hello')}>打印标题</h1>
    )
  }
}
```
新的可控组件方法：

```
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		console.log(this)
	}
	render(){
		return (
			<div>
				App
				<button onClick={this.handleClick}>click</button>
			</div>
		)
	}
}
ReactDOM.render(<App />,document.querySelect('#root'))
```
##### 组件的state 和 setState #####

state：组件的数据状态

setState:接受对象参数（修改组件的数据）

```js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(){
		super()
		this.handleClick = this.handleClick.bind(this)
		this.state = {
			liked:false
		}
	}
	handleClick(){
		this.setState({
			liked:!this.state.liked
		})
	}
	render(){
		return(
			<button onClick={this.handleClick}>{this.state.liked ?'取消' : '点赞'}</button>
		)
	}
}
ReactDOM.render(<App />,document.getElementById('root'))
```
注意：当你调用 setState 的时候，React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新
```js
 handleClickOnLikeButton () {
    this.setState({ count: 0 }) // => this.state.count 还是 undefined
    this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
    this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
  }
```

```js
handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
```