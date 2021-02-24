import React from "react";
import { useRecoilValue } from "recoil";
import { itemListState } from "./store";
import Item from "./item";

const Items = () => {
  const itemList = useRecoilValue(itemListState);
  return (
    <div className="itemsWrap">
      {imageList.map((id) => (
        // <Suspense key={id} fallback="Loading...">
        <Image id={id} key={id} />
        // </Suspense>
      ))}
    </div>
  );
};

export default Items;
