import React, { useContext } from "react";
import { Form, Input, Button, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { S } from "../../Global.styles";
import { ROUTES } from "../../constants/routes";
import { LoginContext } from "../../context/context";

export const RegistrationComponent = () => {
  const { handleRegistration } = useContext(LoginContext);

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleRegistr = () => {
    try {
      handleRegistration(
        form.getFieldValue().login,
        form.getFieldValue().password
      );
    } catch {
      alert("Something is a wrong, try it again later");
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  const handleAuth = () => {
    navigate(ROUTES.AUTH_ROUTE);
  };
  const setFormField = (e) => {
    const key = e.target.name;
    form.setFieldsValue({
      [key]: e.target.value,
    });
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
            name="remember"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <S.ButtonLink type="link" onClick={handleAuth}>
              Login
            </S.ButtonLink>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={handleRegistr}>
              Registration
            </Button>

            <S.ButtonReset htmlType="button" onClick={onReset}>
              Reset
            </S.ButtonReset>
          </Form.Item>
        </Form>
      </Col>
    </S.RowAuth>
  );
};
