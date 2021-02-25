import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { itemState, selectedItemState } from "./store";

const Item = ({ id }) => {
  const { name, url } = useRecoilValue(itemState(id));
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const itemClick = () => {
    setSelectedItem(id);
  };
  console.log(name);
  return (
    <div className="item">
      <div className="itemName">{name}</div>
      <img
        className={selectedItem === id ? "selected" : ""}
        // src={url}
        alt={name}
        onClick={itemClick}
      />
    </div>
  );
};
export default Item;
