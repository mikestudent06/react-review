import React, { useState } from "react";

const Array = () => {
  const [fields, setFields] = useState([]);
  const types = ["STRING", "NUMBER"];

  const add = () => {
    const field = {
      name: "John",
      type: "STRING", // Uniformisation de la casse
    };
    setFields((prevFields) => [...prevFields, field]); // Bonne pratique pour éviter des problèmes de mise à jour
  };

  const handleTypeChange = (index, newType) => {
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, type: newType } : field
      )
    );
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <button
        onClick={add}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add Field
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index} className="border">
              <td className="border p-2 text-center">{field.name}</td>
              <td className="border p-2 text-center">
                <select
                  className="border p-1 rounded"
                  value={field.type}
                  onChange={(e) => handleTypeChange(index, e.target.value)}
                >
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Array;
