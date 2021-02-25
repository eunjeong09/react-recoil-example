import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedItemState, itemState } from "./store";

const RightInfo = () => {
  const selectedItemId = useRecoilValue(selectedItemState);
  const [item, setItem] = useRecoilState(itemState(selectedItemId));
  const onChange = e => {
    const value = e.target.value;
    setItem({
      ...item,
      name: value
    });
  };
  console.log(item);
  return (
    <div className="rightInfoArea">
      <div>
        <input type="text" value={item.name} onChange={onChange} />
      </div>
      <img src={item.url} alt={item.name} />
      <div>
        <b>Id:</b> {item.id}
      </div>
      <div>
        <b>Company:</b> {item.metadata.company}
      </div>
      <div>
        <b>Price:</b> {item.metadata.price}
      </div>
    </div>
  );
};

export default RightInfo;
