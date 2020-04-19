import { Layout,  Breadcrumb } from 'antd';
import React from 'react';

const { Content } = Layout;

class AddTeacher extends React.Component {

  render() {
    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Teacher</Breadcrumb.Item>
              <Breadcrumb.Item>Add New Teacher</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div>
        </Content> 


    );
  }
}







export default AddTeacher;