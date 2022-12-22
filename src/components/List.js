import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: false,
      empleados: [],
    };
  }

  cargarDatos() {
    fetch("http://localhost/empleados/")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        this.setState({
          datos: true,
          empleados: datos,
        });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datos, empleados } = this.state;

    if (!datos) {
      return <div>Cargando....</div>;
    } else {
      return (
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-success" to={"/create"}>Agregar</Link>
          </div>
          <div className="card-body">
            <h4>Lista de empleados</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Estado</th>
                  <th>Fecha de registro</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((empleado) => (
                  <tr key={empleado.Id}>
                    <td>{empleado.Id}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.estado}</td>
                    <td>{empleado.fecha}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                        <Link className="btn btn-warning" to={ "/edit/" +empleado.Id }>
                          Editar
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      );
    }
  }
}

export default List;
