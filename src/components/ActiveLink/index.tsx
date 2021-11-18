// Packages

import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassname: string;
}

export function ActiveLink({
  children,
  activeClassname,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();

  console.log(children);

  const className = asPath === rest.href ? activeClassname : "";

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
