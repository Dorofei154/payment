import styled from "styled-components";
import { Button, Row, Form } from "antd";
import background from "./img/background.jpg";

export const S = {
  RowAuth: styled(Row)`
    background-image: url(${background});
    background-size: cover;
  `,
  ButtonReset: styled(Button)`
    margin-left: 2%;
  `,
  ButtonLink: styled(Button)`
    padding: 0;
  `,
  ButtonRegistration: styled(Button)`
    margin-left: 2%;
  `,
  FormItemMarginBottom: styled(Form.Item)`
    margin-bottom: 5px;
  `,
};
