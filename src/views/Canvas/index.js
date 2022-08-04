import Loadable from "react-loadable";

import { Loading } from "../common/navigation";

const RidersAndDrivers = Loadable({
  loader: () => import("./components/RidersAndDrivers/index"),
  loading: Loading,
});

export const routes = [
  {
    path: "/canvas/riders-drivers",
    exact: true,
    name: "RidersAndDrivers",
    element: RidersAndDrivers,
  },
];

export * from "./components";
