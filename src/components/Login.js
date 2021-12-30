import React from "react";
import "antd/dist/antd.css";
import "./login.css";

import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { login, loginNoRemember } from "../redux/Auth/actions";
export default function Login() {
  const checkLogin = useSelector((state) => state.auth.checkLogin);
  function onFinish(values) {
    if (values.remember === true) {
      dispatch(login(values));
    } else {
      dispatch(loginNoRemember(values));
    }
    //navigate("/");
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dispatch = useDispatch();
  return (
    <div>
      {checkLogin ? (
        <Navigate to="/" />
      ) : (
        <div className="login">
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              type="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 12,
                span: 12,
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}
