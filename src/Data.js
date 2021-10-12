import React from "react";
import "./App.css";

function Form() {
  var data = JSON.parse(localStorage.getItem("form-data")) || [];
  return (
    <div class="form-container">
      <center>
        <h1>Form Data</h1>
      </center>
      {data !== [] ? (
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Quallity Rating </th>
            <th>Beverage Rating</th>
            <th>Clearliness Rating </th>
            <th>OverAll Rating </th>
          </thead>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.quality}</td>
                <td>{item.qualityBev}</td>
                <td>{item.clean}</td>
                <td>{item.overAll}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <center>
          <h3>No Data Present</h3>
        </center>
      )}
    </div>
  );
}

export default Form;
