import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useTitle(str?: string) {
  const location = useLocation();
  // console.log("hooks use-title 执行了 -------", location);
  const title = useMemo(() => {
    if (location.pathname.includes("add")) {
      return `新增${str}`;
    }

    if (location.pathname.includes("edit")) {
      return `编辑${str}`;
    }
  }, []);

  return [title];
}
