import styled from "styled-components";
import { Form } from "antd";

const StyledForm = styled(Form)`
  width: 100%;
  //border: 1px solid red;
  padding: 0 50px;

  .phone-wrap {
    margin-bottom: 24px;
  }

  .code-wrap {
    margin-bottom: 70px;
    .code-content {
      display: flex;
      justify-content: space-between;
      .ant-btn {
        margin-left: 8px;
        span {
          color: rgba(0, 0, 0, 0.65) !important;
        }
      }
    }
  }
  //
  //.ant-form-item {
  //  margin-bottom: 24px;
  //}
`;

export default StyledForm;
