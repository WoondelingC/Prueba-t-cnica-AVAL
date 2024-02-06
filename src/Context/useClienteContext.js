import { useContext } from "react";
import { ClienteContext } from "./clientContext";

export const useClienteContext = () => {
  return useContext(ClienteContext);
};
