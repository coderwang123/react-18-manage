import React, { memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useTitle } from "@/hooks";

import { PageForm } from "@/components/page-cpns";
import { modalFormConfig } from "./config/modal-form.config";

const AddOrEdit: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title] = useTitle("测试");

  const code = location?.state?.code;
  const row = JSON.parse(location?.state?.row ?? "{}");

  function handlePageFormSure(params: any) {}
  function handlePageFormCancel() {
    console.log("取消");
    navigate("/test/test-page", { replace: true });
  }
  return (
    <PageForm
      {...modalFormConfig}
      title={title}
      handlePageFormSure={handlePageFormSure}
      handlePageFormCancel={handlePageFormCancel}
    />
  );
};

export default memo(AddOrEdit);
