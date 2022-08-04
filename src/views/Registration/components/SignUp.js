import React from "react";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p>{errors.name?.message}</p>
        </div>
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

        <div className="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <input type="submit" />
      </form>
    </>
  );
};

export default SignUp;
