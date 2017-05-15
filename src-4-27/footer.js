import React from 'react';
import img from './img.jpg'
class Footer extends React.Component{
	render(){
		let styles = {
			common: {
				textAlign: 'center',
				fontSize: '32px',
				color: 'blue'
			},
		spec:  {
			textAlign: 'center',
			fontSize: '12px',
			color: 'red'
		}
		}
		return (
			<div style={{background:`url(${img}) no-repeat center`,backgroundSize:'cover'}}>
				<h1 style={styles.common}>我是底部</h1>
				<h1 style={Object.assign({},styles.common,styles.spec)}>我是H1</h1>
			</div>
		)
	}
}
export default Footer;