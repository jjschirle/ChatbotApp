/*
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];*/

const AppRoutes = {
    routes: [
        { id: "1R", name: "Home", route: "/" },
        { id: "2R", name: "Jokes", route: "/Jokes" },
        { id: "3R", name: "About", route: "/About" },
    ],
};

export default AppRoutes;
