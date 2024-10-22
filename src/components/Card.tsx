import React from "react";
import Button from "./Button";

type Props = {
  imageURL: string;
  title: string;
  discription?: string;
  isButton?: boolean;
};

const Card: React.FC<Props> = (props) => {
  const cardClickHandler = () => {
    return alert("カードのボタンを押しました");
  };

  return (
    <div className="w-60 rounded-md overflow-hidden border-solid border-2 border-gray-100">
      <div className="w-60 h-40 bg-gray-400">
        <img src={props.imageURL} alt="imgの説明" className="w-full h-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold w-full pb-2">{props.title}</h2>
        {props.discription && (
          <p className="w-full text-wrap pb-2">{props.discription}</p>
        )}
        {props.isButton && (
          <Button label="ボタン" clickHandler={cardClickHandler} fullWidth />
        )}
      </div>
    </div>
  );
};

export default Card;
