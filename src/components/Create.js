import { Link } from "react-router-dom";
import React from "react";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      estado: "",
    };
  }

  handleChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  };

  enviarDatos = (e) => {
    e.preventDefault();
    const { nombre, apellido, estado } = this.state;

    var datosEnviar = { nombre: nombre, apellido: apellido, estado: estado };

    fetch("http://localhost/empleados/?insertar=1", {
      method: "POST",
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
      })
      .catch(console.log);
  };

  render() {
    const { nombre, apellido, estado } = this.state;

    return (
      <div className="card">
        <div className="card-header">Agregar Empleados</div>
        <div className="card-body">
          <form onSubmit={this.enviarDatos}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={nombre}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Ingrese el nombre del empleado"
                aria-describedby="helpId"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                value={apellido}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Ingrese el apellido del empleado"
                aria-describedby="helpId"
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="estadio">Estado</label>
              <input
                type="text"
                name="estado"
                id="estado"
                value={estado}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Ingrese el cargo 'Admin o Empleado'"
                aria-describedby="helpId"
              />
            </div>
            <br />
            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-success">
                Agregar Nuevo
              </button>
              <Link to={"/"} className="btn btn-dark">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}

export default Create;
