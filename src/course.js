import { Layout,  Breadcrumb } from 'antd';
import React from 'react';
import './home.css';

const { Content } = Layout;

class CourseList extends React.Component {

  render() {
    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Course</Breadcrumb.Item>
              <Breadcrumb.Item>Course List</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div>
        </Content> 


    );
  }
}







export default CourseList;