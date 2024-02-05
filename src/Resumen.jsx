import PropTypes from 'prop-types';

const Resumen = ({informacionCliente}) => {
  console.log(informacionCliente)
  if (!informacionCliente) {
    return null;
  }

  return (
    <div className="mt-4">
      <h2>Información del Cliente</h2>
      {/* <p>Nombre: {informacionCliente}</p>
      <p>Edad: {informacionCliente.edad}</p>
      <p>Dirección: {informacionCliente.direccion}</p> */}
    </div>
  );
};

Resumen.propTypes = {
  informacionCliente: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    direccion: PropTypes.string.isRequired,
  }),
};

export default Resumen;
