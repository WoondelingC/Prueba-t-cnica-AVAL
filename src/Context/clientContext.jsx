import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
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
  children: PropTypes.node,
};



export {
  ClienteContext,
  ClienteProvider,
}
