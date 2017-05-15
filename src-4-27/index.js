import React from 'react';
import './index.js';
import ReactDom from 'react-dom';
import Main from './main.js';
import Footer from './footer.js';
function Header(){
	return (
		<h1>我是头部</h1>
	)
};
ReactDom.render(<div>
	<Header/>
	<Main/>
	<Footer/>
	</div>,document.querySelector('#root'))

