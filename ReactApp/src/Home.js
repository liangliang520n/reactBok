import React, { Component } from 'react';
import { Carousel } from 'antd';
import './home.css';

export default class Home extends Component {
	render(){
		return (
			<div className="contentHome">
				<h2>Image Gallery</h2>
				<p> <a href="#">Authentic</a> is free HTML5 site template by <i>template</i><span>mo</span>.You may download and apply this template for any purpose. Credits go to <a href="#">Font Awesome</a> for icons and <a href="#">Unsplash</a> for images.</p>
				<Carousel effect="fade" autoplay="true">
				    <div><img src={require('./images/slider/slide1.jpg')}/></div>
				    <div><img src={require('./images/slider/slide2.jpg')}/></div>
				    <div><img src={require('./images/slider/slide3.jpg')}/></div>
				    <div><img src={require('./images/slider/slide4.jpg')}/></div>
			    </Carousel>
			   
			</div>
		)
	}
}
