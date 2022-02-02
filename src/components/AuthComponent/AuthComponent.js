import React, { useContext, useEffect } from "react";
import { Form, Input, Button, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { S } from "../../Global.styles";
import { ROUTES } from "../../constants/routes";
import { LoginContext } from "../../context/context";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../../firebase/firebase";
import { ACTIONS } from "../../constants/actions";


export const AuthComponent = () => {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { handleLogin, handleLogout } = useContext(LoginContext);
  useEffect(() => {
    if(currentUser){navigate(ROUTES.SUBSCRIPTION_ROUTE)}
  }, [navigate, currentUser]);
  const handleLog = (
    login = form.getFieldValue().login,
    password = form.getFieldsValue().password
  ) => {
    handleLogin(login, password);
    
  };

  const onReset = () => {
    form.resetFields();
  };
  const setFormField = (e) => {
    const key = e.target.name;
    form.setFieldsValue({
      [key]: e.target.value,
    });
  };
  const handleRegistration = () => {
    navigate(ROUTES.REGISTRATION_ROUTE);
  };
  return (
    <S.RowAuth
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
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
                message: "Please input your login!",
              },
            ]}
          >
            <Input name="login" onChange={setFormField} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password name="password" onChange={setFormField} />
          </Form.Item>
          <Form.Item
            name="registration"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <S.ButtonLink type="link" onClick={handleRegistration}>
              Registration
            </S.ButtonLink>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="button"
              onClick={(e) => {
                handleLog();
              }}
            >
              Login
            </Button>

            <S.ButtonReset htmlType="button" onClick={() => {onReset()
            handleLogout()
            }}>
              Reset
            </S.ButtonReset>
          </Form.Item>
        </Form>
      </Col>
    </S.RowAuth>
  );
};
