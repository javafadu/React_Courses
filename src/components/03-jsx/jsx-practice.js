import React from "react";
import countries from "./countries.json";

const JsxPractice = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={country.code}>
            <td>{index+1}</td>
            <td>{country.name}</td>
            <td>{country.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsxPractice;
