import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { itemState, selectedItemState } from "./store";

const Item = ({ id }) => {
  const { name, url } = useRecoilValue(itemState(id));
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemState);
  const itemClick = () => {
    setSelectedItem(id);
  };
  return (
    <div className={selectedItem === id ? "item selected" : "item"} onClick={itemClick}>
      <div className="itemName">{name}</div>
      <img
        src={url}
        alt={name}
      />
    </div>
  );
};
export default Item;
