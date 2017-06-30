import React, { Component } from 'react';
import './Blog.css';

export default class Blog extends Component {
	
	render(){
		return (
			<div className="Blog">
				<div className="meImg">
					<img src={require('./images/head.jpg')} />
				</div>
				<div className="textM"><h3>你在看我吗?<br />其实我也喜欢我自己!
</h3></div>
			</div>
		)
	}
}