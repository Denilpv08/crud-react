import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, setDataToEdit }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Lista de empleados</h4>
      </div>
      <div className="card-body">
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
          {data.length > 0 ? (
            data.map((elemt) => (
              <TableRow
                key={elemt.Id}
                elemt={elemt}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6">Sin datos</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
};

export default Table;
