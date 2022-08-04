import Loadable from "react-loadable";

import { Loading } from "../common/navigation";

const RidersAndDrivers = Loadable({
  loader: () => import("./components/RidersAndDrivers"),
  loading: Loading,
});

export const routes = [
  {
    path: "/riders-drivers",
    exact: true,
    name: "RidersAndDrivers",
    element: RidersAndDrivers,
  },
];

export * from "./components";
