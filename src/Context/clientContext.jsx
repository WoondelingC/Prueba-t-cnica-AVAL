import { createContext, useContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [informacionCliente, setInformacionCliente] = useState(null);

  const guardarInformacionCliente = (datos) => {
    setInformacionCliente(datos);
  };

  return (
    <ClienteContext.Provider
      value={{ informacionCliente, guardarInformacionCliente }}
    >
      {children}
    </ClienteContext.Provider>
  );
};

ClienteProvider.propTypes = {
  children: propTypes.node,
};

export const useClienteContext = () => {
  return useContext(ClienteContext);
};
