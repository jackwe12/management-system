import {  Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';



const breadcrumbNameMap = {
    '/student': 'Student',
    '/student/studentList': 'StudentList',
    '/student/addStudent': 'AddStudent',
    '/course': 'Course',
    '/course/courseType':'Course Type',
    '/interview':'Interview',
    '/interview/interviewArrangement':'Interview Arrangement',
    '/teacher':'Teacher',
    '/teacher/teacherList':'Teacher List',
    '/teacher/addNewTeacher':'Add New Teacher'
  };


const Bread = (props) =>{
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    ); 
    });
      const breadcrumbItems = [
      <Breadcrumb.Item key="home">
          <Link to="/">Home</Link>
      </Breadcrumb.Item>,
      ].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    )
}
export default Bread;