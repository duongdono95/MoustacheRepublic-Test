import React from "react";
import "./DynamicButton.scss";
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  marginAuto?: boolean;
}
const DynamicButton = ({
  children,
  onClick,
  marginAuto,
}: Props) => {
  return (
    <div
      className="dynamic-button"
      style={{
        margin: marginAuto ? "20px auto 0 auto" : undefined,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DynamicButton;
