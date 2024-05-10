import React from "react";

interface DropDownButtonProps {
  fillColor: string;
}

const DropDownButton: React.FC<DropDownButtonProps> = ({ fillColor }) => {
  return (
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke={fillColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg>
  );
};

export default DropDownButton;
