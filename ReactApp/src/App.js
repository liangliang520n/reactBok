import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import $ from 'n-zepto';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Blog from './Blog';
import Contact from './Contact';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;


class App extends Component {
	
  componentWillUpdate(){
  	$(function(){
  		console.log(".ant-tabs-nav .ant-tabs-tab-active")
  		 $(".ant-tabs-nav .ant-tabs-tab-active").click(()=>{
		  	console.log(1)
		  })
  	})
	 
  }
  render() {
    return (
	    <div>
	      <Tabs defaultActiveKey="1">
		    <TabPane tab={<span>Home</span>} key="1">
		      <Home/>
		    </TabPane>
		    <TabPane tab={<span>About</span>} key="2">
		      <About/>
		    </TabPane>
		    <TabPane tab={<span>Resume</span>} key="3">
		      <Resume/>
		    </TabPane>
		    <TabPane tab={<span>Skills</span>} key="4">
		     <Skills/>
		    </TabPane>
		    <TabPane tab={<span>Blog</span>} key="5">
		      <Blog/>
		    </TabPane>
		    <TabPane tab={<span>Contact</span>} key="6">
		      <Contact/>
		    </TabPane>
		  </Tabs>
		  <div className="autograph"><span>Where there is a will</span><br />there is a way.</div>
		</div>
    );
  }
}

export default App;
