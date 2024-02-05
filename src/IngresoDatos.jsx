import { useState } from "react";
import { useClienteContext } from "./Context/clientContext";
import { Link } from "react-router-dom";

const IngresoDatos = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [botonBuscarHabilitado, setBotonBuscarHabilitado] = useState(false);

  const tiposDocumento = ["Cedula de ciudadanía", "Pasaporte"];

  const { guardarInformacionCliente } = useClienteContext();

  const handleTipoDocumentoChange = (event) => {
    setTipoDocumento(event.target.value);
    setBotonBuscarHabilitado(validarCampos());
  };

  const handleNumeroDocumentoChange = (event) => {
    const numero = event.target.value.replace(/\D/g, ""); // Eliminar no números
    setNumeroDocumento(numero.replace(/\B(?=(\d{3})+(?!\d))/g, ".")); // Agregar separadores de miles
    setBotonBuscarHabilitado(validarCampos());
  };

  const validarCampos = () => {
    return (
      tipoDocumento !== "" &&
      numeroDocumento.length >= 8 &&
      numeroDocumento.length <= 11
    );
  };

  const handleBuscarClick = () => {
    const datos = {
      td: tipoDocumento,
      numDoc: numeroDocumento,
    };
    guardarInformacionCliente(datos);
    setBotonBuscarHabilitado(!botonBuscarHabilitado);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="">
          <h2 className="text-center">Consulta de Cliente</h2>
          <label className="mb-4" aria-disabled>
            Todos los campos son obligatorios
          </label>
          <form className="mt-4">
            <div className="form-group mb-3">
              <label className="pb-2">Tipo de Documento</label>
              <select
                className="form-control"
                id="tipoDocumento"
                value={tipoDocumento}
                onChange={handleTipoDocumentoChange}
              >
                <option value="" disabled>
                  Seleccione el tipo de documento
                </option>
                {tiposDocumento.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="numeroDocumento">Número de Documento</label>
              <input
                type="text"
                className="form-control"
                id="numeroDocumento"
                placeholder="Ingrese número de documento"
                value={numeroDocumento}
                onChange={handleNumeroDocumentoChange}
              />
            </div>

            <Link to={"/resumen"}>
              <button
                type="button"
                className={`${
                  botonBuscarHabilitado ? "btn-primary" : "btn-secondary"
                } btn mt-4 w-100`}
                onClick={handleBuscarClick}
                disabled={!botonBuscarHabilitado}
              >
                Buscar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IngresoDatos;
