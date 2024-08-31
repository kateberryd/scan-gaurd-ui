"use client";
import React, { useState, ReactElement } from "react";

type ButtonProps = {
  href?: string;
  text: string;
  color?: string;
  border?: string;
  borderColor?: string;
  textColor?: string;
  minw?: string;
  hidden?: string;
  icon?: ReactElement;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  color,
  border,
  borderColor,
  textColor,
  icon,
  minw,
  hidden,
  onClick,
}) => {
  return (
    <button
      className={`custom-button ${color || "bg-black"} ${
        textColor || "text-white"
      }  ${border || ""} ${borderColor || ""} ${
        minw || "lg:min-w-[80px]"
      }  rounded-full px-7 py-2 flex gap-2 h-[45px] items-center`}
      onClick={onClick}
    >
      <span className={`lg:grid md:grid ${hidden}`}>{text}</span>
      <>{icon}</>
    </button>
  );
};

export default Button;
