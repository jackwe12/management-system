import { Layout, Menu, Icon, Button, Breadcrumb } from 'antd';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {createHashHistory}from 'history';

// import StudentList from '../Student/studentList';
// import InterviewArrangement from '../Interview/interview';
// import CourseList from '../Course/course';
// import TeacherList from '../Teacher/teacher';
// import AddStudent from '../Student/addStudent';
// import AddCourse from '../Course/addCourse';
// import AddTeacher from '../Teacher/addTeacher';
// import CourseType from '../Course/courseType';
// import {connect} from 'react-redux';
// import * as action from '../../store/actions/auth';
import {homeMenu} from '../../data/menu';
import {useState} from 'react';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

// class Home extends React.Component {
  // state = {
  //   collapsed: false,
  // };
  function Home(props){
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
      setCollapsed(collapsed)
    };

    const logOut = () =>{
      // this.props.isLogOut();
      localStorage.removeItem('token');
      // props.history.push('/');
      createHashHistory().push('/login')
    }
    
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
            </Menu>
            <Button onClick={logOut} style={{position:'absolute', top:'15px', right:'15px'}} type="primary">Log Out</Button>


        </Header>
        <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className=""/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to="/"></Link>
              <Icon type="home" />
              <span>Home Page</span>
            </Menu.Item>

              {homeMenu.map((item, index)=>{
                return (
                  <SubMenu
                  key={`sub${index + 1}`}
                  title={
                    <span>
                      <Icon type={item.iconType} />
                      <span>{item.title}</span>
                    </span>
                  }
                > 
                  {item.menuItem.map((i, idx)=>{ return(
                    //給每個list預留10個位置
                    <Menu.Item key={index * 10 + 2 + idx}> <Link to={i.link}>{i.item}</Link></Menu.Item>)
                  })}
                </SubMenu>
                )
              })}
          </Menu>
        </Sider>
        <Layout>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div>
        </Content> 
        {/* <Switch>
            <Route path="/student/studentList" component = {StudentList} />
            <Route path="/student/addStudent" component = {AddStudent} />
            <Route path="/course/courseList" component = {CourseList} />
            <Route path="/course/addCourse" component = {AddCourse} />
            <Route path="/course/courseType" component = {CourseType} />
            <Route path="/interview/interviewArrangement" component = {InterviewArrangement} />
            <Route path="/teacher/addTeacher" component = {AddTeacher} />
            <Route path="/teacher/teacherList" component = {TeacherList} />
            <Route path="/" />
        </Switch>  */}

      </Layout>
      </Layout>
    </Layout>
</Router>
);
  
}




export default Home;