import React, { Component } from 'react';
import { Card } from 'antd';
import { Timeline, Icon } from 'antd';
import './home.css';


export default class About extends Component {
	render(){
		return (<div className="about">
			<Timeline>
    			<Timeline.Item>个人简介</Timeline.Item>
    			<Timeline.Item>职业技能描述</Timeline.Item>
    			<Timeline.Item>职业生涯</Timeline.Item>
    			<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red"></Timeline.Item>
    			
  			</Timeline>
			<Card title="个人介绍" bordered={false} style={{ width: 350 }}>
		      <p>王豪亮／1991年9月／ 天枰座;</p>
		      <p>爱好: 旅行、足球、健身、看书、篮球;</p>
		      <p>梦想: 行万里路，在世界所有角落留下自己足迹，未来若有机会(40岁以后)每年从事一项自己从未涉足过得职业，体验360行的付出与收获。</p>
		    </Card>
		    <Card title="职业技能简述" bordered={false} style={{ width: 350 }}>
		      <p>精通JavaScript、CSS、HTML进行Web标准开发，熟练运用基于面向对象MVC框架(如Backbone.js)进行项目开发，对HTML5 API和CSS3有丰富实践经验。既能独立完成网站项目开发，即需求文档、设计效果图、前端开发、后端开发(Node.js)；也能带领前端团队敏捷开发，高效高质量完成项目的同时，让团队每位成员快速成长～</p>
		    </Card>
		    <Card title="职业生涯" bordered={false} style={{ width: 350 }}>
		      <p>人人网人人小站项目组 -前端团队主管(2016～2017)</p>
		      <p> 人人网 -前端开发工程师(2015～2016)</p>
		      <p>郑州易游光影游戏公司 - 设计主管&amp;前端开发工程师(2015)</p>
		      <p>郑州Google授权服务中心 - 技术顾问(2014～2015)</p>
		    </Card>
		</div>)
	}
}


