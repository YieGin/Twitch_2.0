import React, { useState, useEffect } from "react";
import FormInput from "../LoginPage/FormInput";
import FormInput2 from "../LoginPage/FormInput2";
import "./styles/Navbar.css";
import Image1 from "../../Images/1.png";
const Navbar = () => {
  const [dots, setdots] = useState(false);
  const [Prime, setPrime] = useState(false);
  const [Signup, setSignup] = useState(false);
  const [Login, setLogin] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "*Usernames must be between 4 and 25 characters.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{4,16}$",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "*Passwords must be at least 8 characters long.",
      label: "Password",
      pattern: "^[A-Za-z0-9]{8,16}$",
      required: true,
    },
  ];

  const inputs1 = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "*Usernames must be between 4 and 25 characters.",
      label: "Username",
      pattern: "{1,16}$",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "*Passwords must be at least 8 characters long.",
      label: "Password",
      pattern: "{1,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="Navbar-Page1">
        <div className="Navbar-Page1-left">
          <img className="Image1" src={Image1} alt="" />
          <h2>Browse</h2>
          <div
            onMouseEnter={() => {
              setdots(true);
            }}
            onMouseLeave={() => {
              setdots(false);
            }}
            className="Dots"
          >
            <p></p>
            <p></p>
            <p></p>
            {dots && (
              <div className="OpenSvgLeft">
                <p>More</p>
              </div>
            )}
          </div>
        </div>
        <div className="Navbar-Page1-middel">
          <input className="SearchBar" type="text" placeholder="Search.." />
          <div className="SearchIcondiv">
            <svg
              className="SearchIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill-rule="evenodd"
                d="M10.25 2a8.25 8.25 0 105.28 14.59l5.69 5.69a.75.75 0 101.06-1.06l-5.69-5.69A8.25 8.25 0 0010.25 2zM3.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="Navbar-Page1-right">
          <div
            onMouseEnter={() => {
              setPrime(true);
            }}
            onMouseLeave={() => {
              setPrime(false);
            }}
            className="SvgPage1-right"
          >
            <div className="Number-top">
              <p>53</p>
            </div>
            <svg className="Test" version="1.1" viewBox="0 0 20 20">
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"
                ></path>
              </g>
            </svg>
            {Prime && (
              <div className="OpenSvgPrime">
                <p>New Prime Loot</p>
              </div>
            )}
          </div>
          <div
            onClick={() => {
              setLogin(true);
            }}
            className="Login-"
          >
            Log In
          </div>
          <div
            onClick={() => {
              setSignup(true);
            }}
            className="Sign_Up"
          >
            Sign Up
          </div>
          <svg
            className="Svg-Right-Navbar"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
            ></path>
          </svg>
        </div>
      </div>
      {Signup && (
        <div className="app">
          <form className="Form" onSubmit={handleSubmit}>
            <div className="x-close-login">
              <svg
                onClick={() => {
                  setSignup(false);
                }}
                className="X-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </div>
            <div className="contenttt">
              <img
                className="Welcome-image"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACQ0lEQVR4Ae2b0XGDMAyGM0JH6AjdoGKDjsAV8tyOkE3SO5N2jY7QDbpCN0hPSa5HjWUJCCAUccdDMMb+fmTJsslmkzhqCLu6aI6mTwi7BPr5UgXNt2l4fLmUABWEJ/PweQGat5sVoIT93U3AUxZQQ/OaFyB81sW6zqoIX0mmlA/gnB/pNRUX1BBAJAB5YyscKuYku0ZyxRZQAe/8yFYUF4gEkDo/xZxk10QCPMOhTI6TlvljOdmK4gKRANKpr2JOsmsugCQKuAUIsz/SzhQX+BDQMgS2cHjYFu+P8SkxnhI+7uN6+BvDN1dfjQWcc4juIgsHgOWkj4IAXH0XQMsQcAs4pdE+BDoLrdwYdh/gTtCjgIdBnwdQuYpPhHwm6FNhbh7huYDnAoKNETLMXHFV+OaTodPSO4az6OTG8CUXgLge/saFEq6+Gh/AdXSqchdAixOc6g1zzyW3/Nubo3M4Qa6jU5Rnt/ysC5CFj78QsWYBLHzR/OAy/Z/VWRKgNzyqYEWAQfBWBBgMb0GAUfBrF2A0fB8BUhuU2WttT4sNJY5s/cRmavv+CsIL82nPf2+faP90SeoEmcY6mx6YAVJt4vUKmn3/Z3Z3l4hnyOCxI0sIoAZ+CQFUwc8tgDr4OQVQCT+XAGrh5xBANfzUAqiHn1YAccxOzCHYuvI4j5C5Y7p5AAsxBBzrXA8+J4ykjFx1jfYUiNnaEf/SIvneT9KXRe4ZI8Dq4VHxoQKYgB8qgBn4IQKYgu8rgDn4PgKYhJcKoBn+F8+gSeXNh73MAAAAAElFTkSuQmCC"
                alt=""
              />
              <h2 className="YieShop">Welcome to Twitch</h2>
            </div>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="Ponit-div">
              <p className="Ponit"></p>
              <p className="Ponit1"></p>
              <p className="Ponit1"></p>
            </div>
            <div className="Login-insted-div">
              <div>
                <p
                  onClick={() => {
                    setSignup(false);
                    setLogin(true);
                  }}
                  className="Login-text"
                >
                  Log in instead
                </p>
              </div>
              <a className="Login-">
                <button className="Shoping-login">Next Step</button>
                <i className="Shoping-i-Login"></i>
              </a>
            </div>
          </form>
        </div>
      )}
      {Login && (
        <div className="app">
          <form className="Form" onSubmit={handleSubmit}>
            <div className="x-close-login">
              <svg
                onClick={() => {
                  setLogin(false);
                }}
                className="X-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </div>
            <div className="contenttt">
              <img
                className="Welcome-image"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACQ0lEQVR4Ae2b0XGDMAyGM0JH6AjdoGKDjsAV8tyOkE3SO5N2jY7QDbpCN0hPSa5HjWUJCCAUccdDMMb+fmTJsslmkzhqCLu6aI6mTwi7BPr5UgXNt2l4fLmUABWEJ/PweQGat5sVoIT93U3AUxZQQ/OaFyB81sW6zqoIX0mmlA/gnB/pNRUX1BBAJAB5YyscKuYku0ZyxRZQAe/8yFYUF4gEkDo/xZxk10QCPMOhTI6TlvljOdmK4gKRANKpr2JOsmsugCQKuAUIsz/SzhQX+BDQMgS2cHjYFu+P8SkxnhI+7uN6+BvDN1dfjQWcc4juIgsHgOWkj4IAXH0XQMsQcAs4pdE+BDoLrdwYdh/gTtCjgIdBnwdQuYpPhHwm6FNhbh7huYDnAoKNETLMXHFV+OaTodPSO4az6OTG8CUXgLge/saFEq6+Gh/AdXSqchdAixOc6g1zzyW3/Nubo3M4Qa6jU5Rnt/ysC5CFj78QsWYBLHzR/OAy/Z/VWRKgNzyqYEWAQfBWBBgMb0GAUfBrF2A0fB8BUhuU2WttT4sNJY5s/cRmavv+CsIL82nPf2+faP90SeoEmcY6mx6YAVJt4vUKmn3/Z3Z3l4hnyOCxI0sIoAZ+CQFUwc8tgDr4OQVQCT+XAGrh5xBANfzUAqiHn1YAccxOzCHYuvI4j5C5Y7p5AAsxBBzrXA8+J4ykjFx1jfYUiNnaEf/SIvneT9KXRe4ZI8Dq4VHxoQKYgB8qgBn4IQKYgu8rgDn4PgKYhJcKoBn+F8+gSeXNh73MAAAAAElFTkSuQmCC"
                alt=""
              />
              <h2 className="YieShop">Log in to Twitch</h2>
            </div>
            {inputs1.map((input1) => (
              <FormInput2
                key={input1.id}
                {...input1}
                value={values[input1.name]}
                onChange={onChange}
              />
            ))}
            <div className="Login-insted-div">
              <div>
                <p
                  onClick={() => {
                    setSignup(true);
                    setLogin(false);
                  }}
                  className="Login-text"
                >
                  Sign up instead
                </p>
              </div>
              <a className="Login-">
                <button className="Shoping-login-">Log in </button>
                <i className="Shoping-i-Login"></i>
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
