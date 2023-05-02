import { PropsWithChildren } from "react";

type StyleType = {
  "--gap"?: number;
  alignItems?: string;
  flexWrap?: string;
};

type StackProps = PropsWithChildren<{
  gap?: number;
}>;
export function Stack({ children, gap }: StackProps) {
  const style: StyleType = {};
  if (gap) {
    style["--gap"] = gap;
  }
  return (
    //@ts-ignore
    <div className="stack" style={style}>
      {children}
    </div>
  );
}

type FlexProps = PropsWithChildren<{
  gap?: number;
  center?: boolean;
  nowrap?: boolean;
}>;
export function Flex({ children, gap, center, nowrap }: FlexProps) {
  const style: StyleType = {};
  if (gap) {
    style["--gap"] = gap;
  }
  if (center) {
    style["alignItems"] = "center";
  }
  if (nowrap) {
    style["flexWrap"] = "nowrap";
  }
  return (
    //@ts-ignore
    <div className="hstack" style={style}>
      {children}
    </div>
  );
}
