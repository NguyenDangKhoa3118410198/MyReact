import React, { useState } from "react";
import "../styles/Login.css";
import { Navigate } from "react-router-dom";

const users = [
  {
    username: "admin",
    password: "123",
  },
  {
    username: "admin1",
    password: "123",
  },
];

function Login() {
  const [statusLogin, setStatusLogin] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const usercheck = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (usercheck) {
      setStatusLogin(true);
    } else {
      setStatusLogin(false);
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (statusLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="main_box--main--login">
      <form onSubmit={submit}>
        <div className="formHeader">
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            className="form-control"
            placeholder="Enter username"
            onChange={changeHandler}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            className="form-control"
            placeholder="Enter password"
            onChange={changeHandler}
          />
          <hr></hr>
          <input type="submit" value="Log In" />;
        </div>
      </form>

      <div className="formFooter">
        <a href="./home">Quên mật khẩu</a>
        <a href="./home">Đăng kí ngay</a>
      </div>
    </div>
  );
}

export default Login;
