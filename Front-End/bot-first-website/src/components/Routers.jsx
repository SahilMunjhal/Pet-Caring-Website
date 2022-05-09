import { Routes, Route } from "react-router-dom";
import { CreateEntity } from "./CreateEntity";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import SignUp from "./SignUp";
import {HomeDetails} from './HomeDetails';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/listing/:id" element={<HomeDetails/>}></Route>
      <Route path="/listing/create" element={<CreateEntity />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
    </Routes>
  );
};
