import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './Blog.css';


import { Icon } from 'antd';
import ListSort from './ListSort';

const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'This is MyPhone',
    text: '135*********',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Where is MyEmail',
    text: '31*********@126.com',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Here is MyAddress',
    text: '河南  郑州 ',
  },
  {
    icon: 'cross-circle-o',
    color: '#FFAA00',
    title: 'The Data is:',
    text: '2017年06月10日',
  },
];


export default class Contact extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const { icon, color, title, text } = item;
      return (
        <div key={i} className={`${this.props.className}-list`}>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    });
    return (<div className={`${this.props.className}-wrapper`}>
      <div className={this.props.className}>
        <ListSort
          dragClassName="list-drag-selected"
          appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
        >
          {childrenToRender}
        </ListSort>
      </div>
    </div>);
  }
}
