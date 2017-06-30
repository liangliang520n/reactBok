import React, { Component } from 'react';
import { Card } from 'antd';
import { Timeline, Icon } from 'antd';
import './Resume.css';

export default class Resume extends Component {
	render(){
		return (<div className="resume">
			<Card title="北京人人公司 人人小站项目组-前端团队技术主管" bordered={false} style={{ width: 500 }}>
		      <p>是人人小站初创团队中前端团队(6名前端成员)的技术主管，负责人人小站前端架构和Publisher发布器的模块化开发。小站上线后负责团队前端工作排期、协调，并驱动一系列创新技术的实践和开发，大胆尝试了很多HTML5 API及CSS3效果，并得到了用户及业内较高反响。</p>
		      <p>借鉴CSS Zen Garden，独创轻博客模板结构统一化的规范标准，极大降低了模板后期维护成本，不再需要后端技术人员参与模板开发。</p>
		      <p>小站改版后前端交互曾在公司技术大会中进行演示和分享，并从所有演示项目中脱颖而出获得一等奖，之后与陈一舟交流小站改版交互细节并得到其肯定。</p>
		      <p>2011年底，人人小站获人人公司年度最佳创意团队奖。</p>
		      <p>在人人公司任职期间，曾多次代表人人网参加业内前端技术分享交流会和技术大会，并在公司内部进行技术交流分享。</p>
		      <p>在人人小站作为Leader的两年时间，自己团队的离职率为零~是人人网唯一一个两年离职率是0的团队。</p>
		    </Card>
		    <Card title="北京人人公司 人人网主站-前端开发工程师" bordered={false} style={{ width: 500 }}>
		      <p>在人人爱听项目中负责前端开发工作，以JavaScript逻辑开发为主。</p>
		      <p>在人人网主工程负责首页、个人主页、登陆页的前端开发工作。</p>
		      <p>在人人网主工程负责首页、个人主页、登陆页的前端开发工作。</p>
		    </Card>
		    <Card title="天津易游光影网络游戏公司-前端开发工程师&设计主管" bordered={false} style={{ width: 500 }}>
		      <p>负责公司设计团队(5人)，包括Web UI、游戏UI等... 并负责公司官网及网页游戏的前端开发工作。</p>
		    </Card>
		    <Card title="天津Google授权服务中心 —— 技术顾问" bordered={false} style={{ width: 500 }}>
		      <p>主要负责企业网站设计及前端开发工作，并在北京Google总部多次交流期间学习了大量SEO搜索引擎优化的知识，之后对于Web标和语义化HTML有了更深刻的认知，并在实际工作中积累了大量的经验。</p>
		    </Card>
		</div>)
	}
}


