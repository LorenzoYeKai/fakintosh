import React from "react";

type Props = {
  width?: string | number;
  height?: string | number;
  thickness?: number;
};

const Loader = (props: Props) => {
  const { width = "18px", height = "18px", thickness = 3 } = props;
  return (
    <span
      style={{
        width: width,
        height: height,
        border: `${thickness}px solid`,
        borderBottomColor: "transparent",
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        animation: "rotation 1s linear infinite",
      }}
      className="border-baseColor"
    />
  );
};

export default Loader;
