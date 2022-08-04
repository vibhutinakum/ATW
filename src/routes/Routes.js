import { routes as login } from "../views/Registration";
import { routes as home } from "../views/Home";
import { routes as canvas } from "../views/Canvas";
import { routes as riders } from "../views/RidersAndDrivers";

export const routes = [...home, ...canvas,...riders];

// export const userRoutes = [
//   ...dashboard,
//   ...employee,
//   ...assets,
//   ...unitsManagement,
//   ...hrPortal,
// ];

// export const employeeRoutes = [
//   ...dashboard,
//   ...employee,
//   ...assets,
//   ...unitsManagement,
//   ...hrPortal,
// ];

export const authRoutes = [...login];
