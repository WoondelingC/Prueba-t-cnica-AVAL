import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IngresoDatos from "./IngresoDatos";
import Resumen from "./Resumen";
import { ClienteProvider } from "./Context/clientContext";

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
    <ClienteProvider>
      <RouterProvider router={router} />
    </ClienteProvider>
  );
};

export default App;
