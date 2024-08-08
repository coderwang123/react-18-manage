import React, { Fragment, memo, Suspense, useEffect, useRef, useState } from "react";

import { Outlet } from "react-router-dom";

import StyledAppView from "./style";

const AppView: React.FC = (props) => {
  useEffect(() => {}, []);

  return (
    <StyledAppView>
      <div className="app-view">
        <Outlet />
      </div>
    </StyledAppView>
  );
};

export default memo(AppView);
