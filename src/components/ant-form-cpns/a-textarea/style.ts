import styled from "styled-components";
import { Input } from "antd";

const StyledATextarea = styled(Input.TextArea)`
  //border-radius: var(--border-radius-primary);
  //border: var(--border-primary);
  //color: var(--form-item-color);
  resize: none;
  overflow: auto;
`;
export default StyledATextarea;
