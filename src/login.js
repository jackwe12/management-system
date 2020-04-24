import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';
import * as action from './store/actions/auth';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.isAuth(values.username, values.password, false)
      }
      //if the state of auth currently is true then direct to home page
      if (this.props.isAuthenticated){
        this.props.history.push('/');
      }
      console.log(this.props)
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
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
          {/* <Button href="/" type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button> */}
          <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="register">register now!</a>
        </Form.Item>
      </Form>
    );
}
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = state => {
  return {
      isFetching: state.auth.isFetching,
      error: state.auth.error,
      isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = dispatch => {
  return {
      isAuth: (name, password) => dispatch(action.auth(name, password, false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);

