import { atom } from "recoil";


export const countState = atom({
    key: 'countAtom', // unique ID (with respect to other atoms/selectors)
    default: 10, // default value (aka initial value)
  });