import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import Header from './header';
import Main from './main.js';
import Footer from './footer';
function Haoduoshipin(){
	return (
		<div className='Haoduoshipin'>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
};
ReactDom.render(<Haoduoshipin/>,document.querySelector('#root'))