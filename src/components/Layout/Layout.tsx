import React from "react";
import "./Layout.scss";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="Layout">{children}</div>;
};

export default Layout;
