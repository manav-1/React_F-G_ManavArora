import React from "react";
import { useTable } from "react-table";
import "./App.css";

function Form() {
  const data = React.useMemo(
    () => JSON.parse(localStorage.getItem("form-data")) || [],
    []
  );
  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Quality Rating", accessor: "quality" },
      { Header: "Beverage Rating", accessor: "qualityBev" },
      { Header: "Cleanliness Rating", accessor: "clean" },
      { Header: "OverAll Rating", accessor: "overAll" },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="form-container">
      <center>
        <h1>Form Data</h1>
      </center>
      <table {...getTableProps()} style={{ border: "solid 1px #212121" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "0.15rem solid #212121",
                    background: "#6D9886",
                    color: "#212121",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "0.8rem",
                        border: "solid 1px gray",
                        background: "#F6F6F6",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
