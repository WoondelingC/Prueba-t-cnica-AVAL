import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClienteContext } from "./Context/useClienteContext";

const IngresoDatos = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [botonBuscarHabilitado, setBotonBuscarHabilitado] = useState(false);
  const [onlyNum, setOnlyNum] = useState("");

  const tiposDocumento = ["Cedula de ciudadanía", "Pasaporte"];
  const navigate = useNavigate();

  const { guardarInformacionCliente } = useClienteContext();

  const handleTipoDocumentoChange = (event) => {
    const typeDoc = event.target.value;
    setTipoDocumento(event.target.value);
    setBotonBuscarHabilitado(validarCampos(typeDoc, onlyNum));
  };

  const handleNumeroDocumentoChange = (event) => {
    const numero = event.target.value.replace(/\D/g, ""); // Eliminar no números
    setOnlyNum(numero);
    setNumeroDocumento(numero.replace(/\B(?=(\d{3})+(?!\d))/g, ".")); // Agregar separadores de miles
    setBotonBuscarHabilitado(validarCampos(tipoDocumento, numero));
  };

  const validarCampos = (typeDoc, numDoc) => {
    return typeDoc !== "" && numDoc.length >= 8 && numDoc.length <= 11;
  };

  const handleBuscarClick = () => {
    const datos = {
      td: tipoDocumento,
      numDoc: numeroDocumento,
    };
    guardarInformacionCliente(datos);
    setBotonBuscarHabilitado(!botonBuscarHabilitado);
    navigate("/resumen");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="">
          <h2 className="text-center">Consulta de Cliente</h2>
          <label className="mb-4 d-flex justify-content-center" aria-disabled>
            Todos los campos son obligatorios
          </label>
          <form className="mt-4 was-validated">
            <div className="form-group mb-3">
              <label className="pb-2">Tipo de Documento</label>
              <select
                className="form-control"
                id="tipoDocumento"
                value={tipoDocumento}
                onChange={handleTipoDocumentoChange}
                required
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
              <label htmlFor="numeroDocumento" className="pb-2">
                Número de Documento
              </label>
              <input
                type="text"
                className="form-control"
                id="numeroDocumento"
                placeholder="Ingrese número de documento"
                value={numeroDocumento}
                onChange={handleNumeroDocumentoChange}
                maxLength={13}
                required
              />
              <div className="invalid-feedback">
                Por favor ingrese su número de documento
              </div>
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default IngresoDatos;
