import React from "react";

type Props = {
  label: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  clickHandler: () => void;
};

const Button: React.FC<Props> = (props) => {
  return (
    <div>
      <button
        onClick={props.clickHandler}
        className={`h-10 px-2 rounded bg-green-700 text-white font-bold text-sm ${
          props.fullWidth && "w-full"
        }`}
        id="button-target"
      >
        {props.children ? props.children : props.label}
      </button>
    </div>
  );
};

export default Button;
