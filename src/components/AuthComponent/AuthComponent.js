import React from 'react';
import {  Form, Input, Button, Checkbox , Col  }  from 'antd';
import { useNavigate } from "react-router-dom";
import { S } from '../../Global.styles';
import { ROUTES } from '../../constants/routes';

export const AuthComponent = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const setFormField = (e) => {
    const key = e.target.name;
    form.setFieldsValue({
      [key] : e.target.value
    })
  }
  const handleRegistration = () =>{
    navigate(ROUTES.REGISTRATION_ROUTE)
  }
  return (
    <S.RowAuth type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      <Col span={24}>
      <Form
      form={form}
  name="control-hooks"
  labelCol={{
    span: 8,
  }}
  
  wrapperCol={{
    span: 10,
  }}
  initialValues={{
    remember: true,
  }}
  autoComplete="off"
>
  <Form.Item
    label="Login"
    name="login"
    rules={[
      {
        required: true,
        message: 'Please input your login!',
      },
    ]}
  >
    <Input 
      name='login'
    onChange={setFormField} />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
  >
    <Input.Password 
    name='password'
    onChange={setFormField} />
  </Form.Item>
  <Form.Item
    name="registration"
    wrapperCol={{
      offset: 8,
      span: 16,
    }}
  >
    <S.ButtonLink type="link" onClick={handleRegistration} >
      Registration
    </S.ButtonLink>
  </Form.Item>
  <Form.Item
    wrapperCol={{
      offset: 8,
      span: 16,
    }}
  >
    <Button type="primary" htmlType="submit">
     Login
    </Button>
   
    <S.ButtonReset htmlType="button" onClick={onReset}>
          Reset
        </S.ButtonReset>
  </Form.Item>
</Form>
</Col>
</S.RowAuth>);
};
