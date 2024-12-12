import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function GridComponent() {
  return (
    <table className="table table-condensed">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>zjTm0@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>zjTm0@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>zjTm0@example.com</td>
        </tr>
      </tbody>
    </table>
  );
}

root.render(
  <React.StrictMode>
    <GridComponent />
  </React.StrictMode>
);
