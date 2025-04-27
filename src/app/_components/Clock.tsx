"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";

type Props = Omit<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
  "children"
>;

const Clock = (props: Props) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      setTime(moment().format("ddd DD MMM HH:mm"));
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <p {...props} className="text-white">
      {time}
    </p>
  );
};

export default Clock;
