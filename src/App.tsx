import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarHeader } from "./components/Header/NavbarHeader";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import { SignIn } from "./components/User/SignIn/SignIn";
import { HomePage } from "./components/Home/HomePage";
import { FooterBlog } from "./components/Footer/FooterBlog";
import { Container } from "@material-ui/core";
import { GetCurrentToken, GetUser } from "./api/api";
function App() {
  const token = GetCurrentToken();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
  });
  console.log(token);

  GetUser(token).then((res) => {
    setUser(res.data);
    console.log(res.data);
  });
  console.log(user);

  return (
    <div className="App">
      <Container>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<Post />} />
          <Route path="/sign-up" element={<User />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <FooterBlog />
      </Container>
    </div>
  );
}

export default App;
