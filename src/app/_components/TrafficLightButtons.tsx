import React from "react";

type Props = {
  isActive: boolean;
  handleClose: () => void;
};

const TrafficLightButtons = (props: Props) => {
  const { isActive, handleClose } = props;
  return (
    <div className="flex gap-2 items-center w-fit group z-10">
      <div
        className={`w-5 md:w-3 h-5 md:h-3 rounded-full ${
          isActive ? "bg-[rgb(155,155,155)]" : "bg-[#FF605C]"
        } group-hover:bg-[#FF605C] flex justify-center items-center`}
        onClick={(e) => {
          handleClose();
          e.stopPropagation();
        }}
      >
        <img
          src="/svg/close.svg"
          className="w-full h-full opacity-0 group-hover:opacity-50"
          alt="close"
        />
      </div>
      <div
        className={`w-5 md:w-3 h-5 md:h-3 rounded-full ${
          isActive ? "bg-[rgb(155,155,155)]" : "bg-[#FFBD44]"
        } group-hover:bg-[#FFBD44] flex justify-center items-center`}
      >
        <img
          src="/svg/minus.svg"
          className="w-full h-full opacity-0 group-hover:opacity-50"
          alt="min"
        />
      </div>
      <div
        className={`w-5 md:w-3 h-5 md:h-3 rounded-full ${
          isActive ? "bg-[rgb(155,155,155)]" : "bg-[#00CA4E]"
        } group-hover:bg-[#00CA4E] flex justify-center items-center`}
      >
        <img
          src="/svg/maximize.svg"
          className="w-full h-full opacity-0 group-hover:opacity-50"
          style={{
            transform: "rotate(90deg)",
          }}
          alt="max"
        />
      </div>
    </div>
  );
};

export default TrafficLightButtons;
