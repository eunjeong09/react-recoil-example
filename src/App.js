import React, { Suspense } from "react";
import { useRecoilState } from "recoil";
import Items from "./component/items";
import RightInfo from "./component/rightInfo";
import { itemListState } from "./component/store";

import recoil from "./images/cash.svg";

import "./style/style.css";

export default function App() {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const counter = itemList.length + 1;
  const addItem = () => {
    setItemList([...itemList, counter]);
  };

  return (
    <div>
      <div className="App">
        <Suspense fallback="Loading...">
          <Items />
          <RightInfo />
        </Suspense>
      </div>
      <div className="buttonWrap">
      {counter <= 6 && <div className="button" onClick={addItem}>Add Item</div>}
      </div>
    </div>
  );
}
