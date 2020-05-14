import { Layout, Menu, Icon, Button, Breadcrumb } from 'antd';
import React from 'react';
import '../../styles/home.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createHashHistory}from 'history';
import RouteContent from '../../components/content';
import {homeMenu} from '../../data/menu';
import {useState} from 'react';


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
  function Home(props){
    const { location } = props;
    const [collapsed, setCollapsed] = useState(false);


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
    

    const onCollapse = collapsed => {
      setCollapsed(collapsed)
    };

    const logOut = () =>{
      localStorage.removeItem('token');
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

    

              {homeMenu.map((item, index)=>{
                
                return(
                item.menuType !== 0? 
                (
                  <SubMenu
                  key={item.title}
                  title={
                    <span>
                      <Icon type={item.iconType} />
                      <span>{item.title}</span>
                    </span>
                  }
                > 
                  {item.menuItem.map((i, idx)=>{ return(
                    <Menu.Item key={i.link}> <Link to={i.link}>{i.item}</Link></Menu.Item>)
                  })}
                </SubMenu>
                ): 
                (
                  <Menu.Item key={item.title}>
                    <Link to="/"></Link>
                    <Icon type={item.iconType} />
                    <span>{item.title}</span>
                  </Menu.Item>
                )
                )
              })}

          </Menu>
        </Sider>
        <Layout>
        <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }} routes={RouteContent}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb> */}
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>

            {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div> */}
            <RouteContent/>
        </Content> 

        
      </Layout>
      </Layout>
    </Layout>
</Router>
);
  
}




export default Home;