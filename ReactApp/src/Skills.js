import React, { Component } from 'react';
import './Resume.css';


export default class Skills extends Component {
	
	render(){
		return (<div className="skills">
        	<h2>Vocationol Skills</h2>
        	<div className="skillOne">
        		<h3>JavaScript</h3>
        		<p>精通JavaScript原生编程，对面向对象编程有丰富经验，可进行高效模块化开发，并保证良好复用和维护性。可熟练使用MVC框架(如BackBone.js)进行复杂单页面应用开发。对编写jQuery组件有丰富经验。</p>
        	</div>
        	
        	<div className="skillOne">
        		<h3>HTML5 API</h3>
        		<p>能在项目中熟练运用HTML5 API进行渐进增强式开发，对于使用HTML5提升网站性能和用户体验有大量实战经验，曾在人人网很多项目中进行HTML5实践(如LocalStorage、Drag&Drop、File API、WebWorkers、postMessage等)</p>
        	</div>
        	<div className="skillOne">
        		<h3>Node.js</h3>
        		<p>能使用Node.js+MongoDB完成网站后端开发，目前正在利用空闲时间开发某网站项目。</p>
        	</div>
        	<div className="skillOne">
        		<h3>移动端开发</h3>
        		<p>能熟练使用Taitanium平台开发Native移动端应用，性能优于phoneGap等封装类开发平台，并且支持跨平台开发，开发低成本、高性能、跨平台。</p>
        	</div>
        	<div className="skillOne">
        		<h3>HTML(5)&CSS(3)</h3>
        		<p>因为曾在Google学习过SEO的缘故，所以对W3C标准有深刻的认识，尤其是语义化标签，已习惯性使用HTML5标签。能熟练运用CSS完成各种类型的网页布局，包括当前流行的响应式布局。对使用CSS3提升用户体验有浓厚兴趣，喜欢使用CSS3解决过去js达到的效果，曾经常在实际项目中实践(如:transiton、keyframes等)</p>
        	</div>
        	<div className="skillOne">
        		<h3>团队管理</h3>
        		<p>作为团队Leader不但为项目负责，而且更关心下属的职业发展，让每个人在工作的同事，得到最大化的能力提升，让大家能积极主动完成本职工作的同时，帮助他人一起项目收尾。善于塑造一支有极强凝聚力的团队。</p>
        	</div>
        </div>
		)
	}
}
