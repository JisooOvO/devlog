import { atom } from "recoil";

export const atomIsHambergurButtonClick = atom({
  key: "isHambergurButtonClick",
  default: false,
});

export const atomContents = atom({
  key: "contents",
  default: "",
});
