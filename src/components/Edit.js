import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentDidMount() {
    // console.log(this.props.match.params.Id);

    fetch("http://localhost/empleados/?consultar=" + this.props.Id) 
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        this.setState({
          datos: true,
          empleados: datos,
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Editar Empleado</div>
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
        <div className="card-footer text-muted">Footer</div>
      </div>
    );
  }
}

export default Edit;
