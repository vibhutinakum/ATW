import Loadable from "react-loadable";

import { Loading } from "../common/navigation";

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading,
});

export const routes = [
  {
    path: "/home",
    exact: true,
    name: "home",
    element: Home,
  },
];

export * from "./components";
