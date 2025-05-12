import React, { useState } from "react";

const Array = () => {
  const [fields, setFields] = useState([]);
  const types = ["STRING", "NUMBER"];
  const [loading, setLoading] = useState(false);
  const [selectedField, setSelectedField] = useState(null);

  const add = () => {
    const field = {
      name: "John",
      type: "STRING",
      properties: {},
    };
    setFields((prevFields) => [...prevFields, field]);
  };

  const handleTypeChange = (index, newType) => {
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, type: newType } : field
      )
    );
  };

  const handleNameChange = (index, newName) => {
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, name: newName } : field
      )
    );
  };

  const handlePropertyChange = (key, value) => {
    setSelectedField((prevField) => ({
      ...prevField,
      properties: { ...prevField.properties, [key]: value },
    }));
  };

  const selectField = (index) => {
    setSelectedField({ ...fields[index], index });
  };

  const saveFields = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/fields", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error("Échec de l'enregistrement");
      alert("Enregistrement réussi !");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto flex gap-4">
      <div className="flex-1">
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
              <tr
                key={index}
                className="border cursor-pointer hover:bg-gray-100"
                onClick={() => selectField(index)}
              >
                <td className="border p-2 text-center">
                  <input
                    type="text"
                    value={field.name}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                </td>
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
        <button
          onClick={saveFields}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>

      {selectedField && (
        <div className="flex-1 p-4 border rounded-md shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Field Properties</h2>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={selectedField.name}
              onChange={(e) =>
                handleNameChange(selectedField.index, e.target.value)
              }
              className="border p-1 rounded w-full mt-1"
            />
          </label>
          <label className="block mb-2">
            Type:
            <select
              className="border p-1 rounded w-full mt-1"
              value={selectedField.type}
              onChange={(e) =>
                handleTypeChange(selectedField.index, e.target.value)
              }
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <h3 className="text-md font-semibold mt-4">Custom Properties</h3>
          {Object.entries(selectedField.properties || {}).map(
            ([key, value]) => (
              <label key={key} className="block mb-2">
                {key}:
                <input
                  type="text"
                  value={value}
                  onChange={(e) => handlePropertyChange(key, e.target.value)}
                  className="border p-1 rounded w-full mt-1"
                />
              </label>
            )
          )}
          <button
            className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            onClick={() => handlePropertyChange(prompt("Property name:"), "")}
          >
            Add Property
          </button>
        </div>
      )}
    </div>
  );
};

export default Array;
