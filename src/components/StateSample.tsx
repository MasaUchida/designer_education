import React, { useState } from "react";
import Button from "./Button";

const StateSample: React.FC = () => {
  const [buttonState, setButtonState] = useState<boolean>(false);

  const stateChangeHandler = () => {
    setButtonState(!buttonState);
  };

  return (
    <div className="rounded-md border-2 border-gray-200 p-4 flex flex-col gap-2 items-center">
      {buttonState ? (
        <h2 className="text-xl font-bold">OFF</h2>
      ) : (
        <h2 className="text-xl font-bold">ON</h2>
      )}
      <Button label="state変えるよ〜" clickHandler={stateChangeHandler} />
    </div>
  );
};

export default StateSample;
