import React, {useState} from "react";

import { ReactDOM } from "react";
import Admin from "./admin";
import './login.css';

function Login () {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
  ];

  const errors = {
    usn: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
      //Prevent page reload
    event.preventDefault();

    var { usn, pass } = document.forms[0];

    //Tìm thông tin đăng nhập của người dùng
    const userData = database.find((user) => user.username === usn.value);

    // So sánh thông tin người dùng
    if (userData) {
      if (userData.password !== pass.value) {
        // Mật khẩu không hợp lệ
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // tên người sử dụng không được tìm thấy
      setErrorMessages({ name: "usn", message: errors.usn });
    }
  };

  // Trả ra thông báo lỗi khi được gọi tới thông qua name ( name sẽ gọi đến lỗi pass hoặc usn)
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="usn" required />
          {renderErrorMessage("usn")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value='Login' />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Welcome</div>
        {isSubmitted ? <Admin/> : renderForm}
      </div>
    </div>
  );
}

export default Login;