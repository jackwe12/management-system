import {  Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import breadcrumbNameMap from '../data/breadCrumbNameMap';
import {withRouter} from 'react-router-dom'


//加上withRouter((props) => {})
//這樣組件就可以含有路由訊息(aka 當下url)

const Bread = withRouter((props) =>{
    // console.log(props.location)
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
});
export default Bread;

