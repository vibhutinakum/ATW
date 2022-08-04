import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginSuccess } from "../../../store/login/actions";
import { useForm } from "react-hook-form";
import InputBox from "../../../Utils/InputBox";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem(
      "data",
      JSON.stringify({
        email: "test@gmail.com",
        password: "test123",
        token: "token",
      })
    );
    dispatch(
      getLoginSuccess({
        email: "test@gmail.com",
        password: "test123",
        token: "token",
      })
    );
  };

  const Demo = () => {
    console.log("demo");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password length should be at least 4 characters",
              },
              maxLength: {
                value: 12,
                message: "Password cannot exceed more than 12 characters",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
