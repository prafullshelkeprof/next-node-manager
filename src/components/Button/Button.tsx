import type { ComponentPropsWithRef, PropsWithChildren } from "react";
import { classMerge } from "@/util/style-utils";
interface IButton extends PropsWithChildren, ComponentPropsWithRef<"button"> {}

const Button = (props: IButton) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={classMerge(
        "px-2 py-1 bg-sky-500/100 rounded-md text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
