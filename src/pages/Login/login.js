import React from 'react';
import '../../styles/login.css';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import {useEffect} from 'react'
import {teacherLogin} from '../../config/httpRouter';

function NormalLoginForm (props) {
  //當進入protected route失敗 會被redirect, 並傳入props.location.state.error
  //避免props.location.state不存在，先給定
  const { state = {} } = props.location;

  useEffect(() => {
   if (state.error){
    message.warn(state.error, 1);
    // console.log(state.prevPath)
   }

  }, [state.error])

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {

      if (!err) {
        console.log('Received values of form: ', values);
       let data = {name:values.username, password:values.password}
        teacherLogin(data)
        .then(res=>{
          if(!res.data.error) message.success('login success', 1)
          localStorage.setItem('token', res.data.datas.token);
          if (localStorage.getItem('token')){
            if (state.prevPath) props.history.push(state.prevPath)
            else props.history.push('/home')
          }        
        })
        .catch(err=>message.warn('wrong username or password'))
      }
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