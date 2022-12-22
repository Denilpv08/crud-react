import React from "react";

const TableRow = ({ elemt, setDataToEdit }) => {
    let { Id, nombre, apellido, estado, fecha } = elemt;

  return (
    <tr>
      <td>{Id}</td>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{estado}</td>
      <td>{fecha}</td>
      <td>
        <div className="btn-group" role="group" aria-label="">
          <button onClick={ () => setDataToEdit(elemt)} className="btn btn-warning">Editar</button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
