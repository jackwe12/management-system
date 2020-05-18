import { Layout, Menu, Icon, Button } from 'antd';
import React from 'react';
import '../../styles/home.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createHashHistory}from 'history';
import RouteContent from '../../components/content';
import {homeMenu} from '../../data/menu';
import {useState} from 'react';
import Bread from '../../components/breadcrumb';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

  function Home(props){
    const { location } = props;
    const [collapsed, setCollapsed] = useState(false);



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
            <Bread location={location}/>
            <RouteContent/>
        </Content> 

        
      </Layout>
      </Layout>
    </Layout>
</Router>
);
  
}




export default Home;