import React from "react";

type Props = {
  icon: string;
  folder: string;
  isActive: boolean;
  onClick: () => void;
};

const FinderSidebarButton = (props: Props) => {
  const { icon, folder, isActive, onClick } = props;
  return (
    <button
      className="bg-transparent border-none flex items-center gap-1 text-white text-xs font-bold cursor-pointer rounded-md"
      style={{
        backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
      }}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="w-6 h-6" />
      <p className="capitalize text-ellipsis truncate">{folder}</p>
    </button>
  );
};

export default FinderSidebarButton;
