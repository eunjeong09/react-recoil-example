//item을 저장하는 컴포넌트
import { atom, atomFamily } from "recoil";
import cash from "../images/cash.svg";

const getItem = async id => {
  let name;
  let company;
  let price;
  switch(id){
    case 1 : 
      name = "자전거";
      company = "자전거세상";
      price = "₩ 150,000";
      break;
    case 2 : 
      name = "돈";
      company = "머니머니";
      price = "₩ 500";
      break;
    case 3 : 
      name = "계란";
      company = "써니사이드업";
      price = "₩ 1,000";
      break;
    case 4 : 
      name = "꽃";
      company = "플라워랜드";
      price = "₩ 20,000";
      break;
    case 5 : 
      name = "iPhone";
      company = "애플";
      price = "₩ 960,000";
      break;
    case 6 : 
      name = "우산";
      company = "우산회사";
      price = "₩ 6,000";
      break;
    default : 
      company = "그냥 회사";
      price = "그냥 가격";
  }


  return new Promise(resolve => {
    const url = {cash};
    // const url=`../images/${id}.png`;
    let image = new Image();
    image.onload = () =>
    console.log(company);
      resolve({
        id,
        // name: `Item ${id}`,
        name : `Item ${id} : ${name}`,
        url,
        rightInfo: {
          width: `${image.width}px`,
          height: `${image.height}px`,
          // company: `${company}`,
          company: company,
          price: price,
        },
      });
    image.src = url;
  });
};

export const itemState = atomFamily({
  key: "itemState",
  default: async id => getItem(id)
});

export const selectedItemState = atom({
  key: "selectedItemState",
  default: 1
});

export const itemListState = atom({
  key: "itemListState",
  default: [1, 2, 3]
});
