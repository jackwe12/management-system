import { Layout, Menu, Icon } from 'antd';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StudentList from './studentList';
import InterviewArrangement from './interview';
import CourseList from './course';
import TeacherList from './teacher';
import AddStudent from './addStudent';
import AddCourse from './addCourse';
import AddTeacher from './addTeacher';
import CourseType from './courseType';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                {/* <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item> */}
            </Menu>
        </Header>
        <Layout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className=""/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/home"></Link>
              <Icon type="home" />
              <span>Home Page</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="calendar" />
                  <span>Manage Students</span>
                </span>
              }
            >
              <Menu.Item key="3"> <Link to="/student/studentList">Student List</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/student/addStudent">Add New Student</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="book" />
                  <span>Manage Courses</span>
                </span>
              }
            >
              <Menu.Item key="6"><Link to="/course/courseList">Course List</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/course/addCourse">Add New Course</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/course/courseType">Course Type</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="contacts" />
                  <span>Manage Interview</span>
                </span>
              }
            >
              <Menu.Item key="9"><Link to="/interview/interviewArrangement">Interview Arrangement</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="user" />
                  <span>Manage Teachers</span>
                </span>
              }
            >
              <Menu.Item key="10"><Link to="/teacher/teacherList">Teacher List</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/teacher/addTeacher">Add New Teacher </Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
        
        <Switch>
            <Route path="/student/studentList" component = {StudentList} />
            <Route path="/student/addStudent" component = {AddStudent} />
            <Route path="/course/courseList" component = {CourseList} />
            <Route path="/course/addCourse" component = {AddCourse} />
            <Route path="/course/courseType" component = {CourseType} />
            <Route path="/interview/interviewArrangement" component = {InterviewArrangement} />
            <Route path="/teacher/addTeacher" component = {AddTeacher} />
            <Route path="/teacher/teacherList" component = {TeacherList} />
            <Route path="/home" />
        </Switch> 

      </Layout>
      </Layout>
    </Layout>
</Router>

    );
  }
}





export default Home;