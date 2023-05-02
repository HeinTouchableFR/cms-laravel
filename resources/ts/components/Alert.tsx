import { PropsWithChildren } from "react";

type Alert = PropsWithChildren<{
  type: string;
  duration?: number;
}>;

export function Alert({ type = "success", children, duration }: Alert) {
  return (
    <alert-message
      type={type}
      className="full"
      duration={type === "success" ? duration : undefined}
    >
      {children}
    </alert-message>
  );
}
