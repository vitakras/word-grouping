import { atom } from "recoil";

export const wordGroupFoldersState = atom({
  key: "folder",
  default: {},
});

export const notificationState = atom({
  key: "notification",
  default: "",
});
