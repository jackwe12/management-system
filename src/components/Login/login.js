import React from 'react';
import '../../styles/login.css';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

import {teacherLogin} from '../../config/httpRouter';

function NormalLoginForm (props) {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {

      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.isAuth(values.username, values.password, false)
        teacherLogin(values)
        .then(res=>{
          if(!res.data.error) message.success('login success', 1)
          localStorage.setItem('token', res.data.datas.token);
          if (localStorage.getItem('token')){
            props.history.push('/home')
          }        
        })
        .catch(err=>message.warn('wrong username or password'))
      }
      // if the state of auth currently is true then direct to home page
    });
  };


    const { getFieldDecorator } = props.form;
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/forgetPassword">
            Forgot password
          </a>

          <Button onSubmit={handleSubmit} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="register">register now!</a>
        </Form.Item>
      </Form>
    );
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);



export default WrappedNormalLoginForm;