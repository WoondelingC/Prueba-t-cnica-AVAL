import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IngresoDatos from "./IngresoDatos";
import Resumen from "./Resumen";

const App = () => {
    const router = createBrowserRouter([
      {
        element: <IngresoDatos />,
        path: "/",
      },
      {
        element: <Resumen />,
        path: "/resumen",
      },
    ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
