import Loadable from "react-loadable";

import { Loading } from "../common/navigation";

const Login = Loadable({
  loader: () => import("./components/login"),
  loading: Loading,
});
const SignUp = Loadable({
  loader: () => import("./components/SignUp"),
  loading: Loading,
});

const ForgotPassword = Loadable({
  loader: () => import("./components/ForgotPassword"),
  loading: Loading,
});

export const routes = [
  {
    path: "/",
    exact: true,
    name: "login",
    element: Login,
  },
  {
    path: "/signup",
    exact: true,
    name: "SignUp ",
    element: SignUp,
  },
  {
    path: "/forgot-password",
    exact: true,
    name: "forgot-password ",
    element: ForgotPassword,
  },
];

export * from "./components";
