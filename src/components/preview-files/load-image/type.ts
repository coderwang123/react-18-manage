import { CSSProperties } from "react";

export interface ILoadImage {
  url: string;
  style?: CSSProperties;
  transitionDelay?: string;
  $time?: number;
  width?: string;
  height?: string;
}
