import React, { useState } from "react";
import FormCreate from "./FormCreate";
import Table from "./Table";

const inicialDb = [
    {
        Id: 1,
        nombre: "Seiya",
        apellido: "Pegaso",
        estado: 'Admonistrador',
        fecha: '22/12/2022'
      },
      {
        Id: 2,
        nombre: "Shiryu",
        apellido: "Dragón",
        estado: 'Empleado',
        fecha: '22/12/2022'
      },
      {
        Id: 3,
        nombre: "Hyoga",
        apellido: "Cisne",
        estado: 'Admonistrador',
        fecha: '22/12/2022'
      },
      {
        Id: 4,
        nombre: "Shun",
        apellido: "Andrómeda",
        estado: 'Empleado',
        fecha: '22/12/2022'
      },
      {
        Id: 5,
        nombre: "Ikki",
        apellido: "Fénix",
        estado: 'Empleado',
        fecha: '22/12/2022'
      },
//   fetch("http://localhost/empleados/").then((respuesta) => respuesta.json()),
];

const CrudApp = () => {
  const [db, setDb] = useState(inicialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.Id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.Id === data.Id ? data : el));
    setDb(newData);
  };

  return (
    <div className="container">
      <br />
      <FormCreate
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <br />
      <Table data={db} setDataToEdit={setDataToEdit} />
    </div>
  );
};

export default CrudApp;
