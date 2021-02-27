//item을 저장하는 컴포넌트
import { atom, atomFamily } from "recoil";

const getItem = async (id) => {
  return new Promise((resolve) => {
    const url = "../images/cash.svg";
    // const url=`../images/${id}.png`;
    let image = new Image();
    image.onload = () =>
      resolve({
        id,
        name: `Item ${id}`,
        url,
        rightInfo: {
          width: `${image.width}px`,
          height: `${image.height}px`,
        //   company: "회사",
        //   price: "가격",
        },
      });
    image.src = url;
  });
};

export const itemState = atomFamily({
  key: "itemState",
  default: async (id) => getItem(id)
});

export const selectedItemState = atom({
  key: "selectedItemState",
  default: 1,
});

export const itemListState = atom({
  key: "itemListState",
  default: [1, 2, 3],
});
