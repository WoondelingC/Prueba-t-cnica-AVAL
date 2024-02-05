import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <form className="d-flex justify-content-center flex-column">
        <h2>El cliente no se encuentra en nuestra base de datos</h2>
        <Link to={"/"} className="d-flex justify-content-center">
          <button
            type="button"
            className="btn-primary btn mt-4 w-50"
          >
            Atras
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ErrorPage;
