import React from "react";
import { localCache } from "@/utils/comm";
import { FM_TOKEN } from "@/global/constants";
import { Navigate } from "react-router-dom";

export function withPerRoute(OriginalComponent: any) {
  const token = localCache.getCache(FM_TOKEN);
  if (token) {
    return <OriginalComponent />;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
}
