import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
};

function App() {
  const [fullName, setFullName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFullName(formData.firstName + " " + formData.lastName);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Digite o sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Mostrar nome completo</button>
      </form>
      <h2>{fullName}</h2>
    </>
  );
}

export default App;
