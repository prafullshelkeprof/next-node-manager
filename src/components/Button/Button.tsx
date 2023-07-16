import type { ComponentPropsWithRef, HTMLAttributes, PropsWithChildren } from "react";
import { classMerge } from "@/util/style-utils";
interface IButton extends PropsWithChildren,ComponentPropsWithRef<'button'>{};

const Button = (props: IButton ) => {
  const { children, className, ...rest } = props;
  return <button className={classMerge("p-1 bg-sky-500/100 rounded-md", className)} {...rest}>{children}</button>;
};

export default Button;