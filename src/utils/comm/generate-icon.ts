import React, { ReactNode } from "react";
import * as Icons from "@ant-design/icons";
import { SvgIcon } from "@/components/svg";

export function generateIcon(name?: string | ReactNode) {
  if (!name) return;

  if (typeof name === "string") {
    return React.createElement(Icons && (Icons as any)[name], {
      style: { fontSize: "17px" }
    });
  }
}

export function generateIconSvg(name: string) {
  if (!name) return;
  const Cpn = SvgIcon?.[name];
  return Cpn
    ? React.createElement(Cpn, {
        width: "17px",
        height: "17px"
      })
    : "";
}
