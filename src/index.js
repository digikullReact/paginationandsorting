import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    RecoilRoot,
 
  } from 'recoil';
  


  // We have two things in recoil-- >one is the atom ----> similar to reducers
  //Another one is selector
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <RecoilRoot>
         <App />

    </RecoilRoot>
 
   

);
