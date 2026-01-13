/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.svg?react" {
  import type { FC, SVGProps } from "react";
  const Component: FC<SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module "*.json" {
  const value: unknown;
  export default value;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

