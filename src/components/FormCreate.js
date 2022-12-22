import React, { useState, useEffect } from "react";

const initailForm = {
  nombre: "",
  apellido: "",
  estado: "",
  Id: null
};

const FormCreate = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.nombre]: e.target.value,
      [e.target.apellido]: e.target.value,
      [e.target.estado]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido) {
      alert("Datos incompletos");
      return;
    }

    if (form.Id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className="card">
      <div className="card-header">Agregar Empleados</div>
      <div className="card-body">
        <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
        <form onSubmit={ handleSubmit }>
          <div className="form-group">
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              value={form.name}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="">Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              onChange={handleChange}
              value={form.name}
              className="form-control"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="">Estado</label>
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              onChange={handleChange}
              value={form.name}
              className="form-control"
            />
          </div>
          <br />
          <div className="btn-group" role="group" aria-label="">
            <input type="submit" value="Agregar" className="btn btn-primary" />
            <input
              type="reset"
              value="Limpiar"
              className="btn btn-dark"
              onClick={handleReset}
            />
          </div>
        </form>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
};

export default FormCreate;