import type { childrenProps } from "../types";

export default function AuthLayout({ children }: childrenProps) {
  return <div className="h-dvh overflow-hidden">{children}</div>;
}
