import React, { useState, useContext } from "react";
import url from "../../../utils/connectionUrl";
import { store } from "react-notifications-component";
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  Label,
} from "./LoginElements";

import { Context } from "../../../Context/UserContext";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setUser] = useContext(Context);

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    fetch(`${url}/api/auth/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) throw new Error(response.message);
        const newUser = { _id: response._id, username: response.username };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        history.push("/");
      })
      .catch((err) => {
        store.addNotification({
          title: "Failed to register",
          message: err.message,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
          },
        });
      });
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <FormStyled onSubmit={onLoginFormSubmitHandler}>
        <FormTitle>Login</FormTitle>
        <Label autocomplete="username" htmlFor="email">
          Email / Username
        </Label>
        <Input name="email" onChange={updateEmail} />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" onChange={updatePassword} />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
};
export default Login;
