import React, { useState } from "react";

function CommunicationMethodManagement() {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Create a LinkedIn post", mandatory: true },
    { name: "LinkedIn Message", description: "Send a LinkedIn message", mandatory: true },
    { name: "Email", description: "Send an email", mandatory: true },
    { name: "Phone Call", description: "Make a phone call", mandatory: true },
    { name: "Other", description: "Other communication method", mandatory: false },
  ]);

  const addMethod = () => {
    setMethods([...methods, { name: "", description: "", mandatory: false }]);
  };

  const deleteMethod = (index) => {
    const updatedMethods = methods.filter((_, i) => i !== index);
    setMethods(updatedMethods);
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            {method.name} - {method.description} {method.mandatory ? "(Mandatory)" : ""}
            <button onClick={() => deleteMethod(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addMethod}>Add Method</button>
    </div>
  );
}

export default CommunicationMethodManagement;
