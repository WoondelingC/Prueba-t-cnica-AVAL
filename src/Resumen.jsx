import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import { useClienteContext } from "./Context/clientContext";

const Resumen = () => {
  const { informacionCliente } = useClienteContext();

  const [dataClient, setDataClient] = useState([]);
  const [errorPage, setErrorPage] = useState(false);
  const { td, numDoc } = informacionCliente;
  const documento = numDoc.replace(/\./g, "");
  console.log(td, numDoc, dataClient, errorPage);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // URL API
    const apiUrl = `http://localhost:3000/clients?numero_documento=${documento}`;

    try {
      // Realiza la solicitud a la API
      const response = await fetch(apiUrl);

      // Verifica si la respuesta es exitosa (código de estado 200-299)
      if (!response.ok) {
        throw new Error(`Error de red - código ${response.status}`);
      }

      // Parsea la respuesta como JSON
      const data = await response.json();

      if (data.length > 0) {
        setDataClient(data);
        setErrorPage(false);
      } else {
        setErrorPage(true);
      }

      // Haz lo que necesites con los datos de la API
      console.log("Datos de la API:", data);
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir durante la solicitud
      console.error("Error al consumir la API:", error);
    }
  };

  const handleReturn = () => {
    setDataClient([]);
    setErrorPage(false);
  };

  return (
    <>
      {!errorPage && dataClient.length > 0 ? (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="">
              <h2 className="text-center">Información del Cliente</h2>
              {dataClient.map((client) => {
                console.log(client);
                return (
                  <form key={client.numero_documento} className="mt-4">
                    <div className="input-group input-group-sm mb-3">
                      <label
                        htmlFor="primerNombre"
                        className="input-group-text"
                      >
                        Primer nombre:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={client.primer_nombre}
                        disabled
                      />
                    </div>

                    <br />

                    <div className="input-group input-group-sm mb-3">
                      <label
                        htmlFor="primerNombre"
                        className="input-group-text"
                      >
                        Primer apellido:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={client.primer_apellido}
                        disabled
                      />
                    </div>

                    <Link to={"/"}>
                      <button
                        type="button"
                        className="btn-primary btn mt-4 w-100"
                        onClick={handleReturn}
                      >
                        Volver
                      </button>
                    </Link>
                  </form>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

Resumen.propTypes = {
  informacionCliente: PropTypes.shape({
    td: PropTypes.string.isRequired,
    numDoc: PropTypes.string.isRequired,
  }),
  dataClient: PropTypes.shape({
    primer_apellido: PropTypes.string.isRequired,
    primer_nombre: PropTypes.string.isRequired,
    tipo_documento: PropTypes.string,
    numero_documento: PropTypes.string,
  }),
};

export default Resumen;

{
  /* 
      
          <h2 className="text-center">Información del cliente</h2>
          <form className="mt-4">
            <div className="form-group mb-3">
              <label className="pb-2">Primer nombre</label>
              
                <option value="" disabled>
                  Seleccione...
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

            
          </form>
        </div>
      </div> */
}
