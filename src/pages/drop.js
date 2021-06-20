import React from "react";

function CharacterDropDown() {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    async function getCharacters() {
      const response = await fetch("http://localhost:8000/api/classroom");
      const body = await response.json();
      
        setItems(body.map(({ id ,name}) => ({ label: id, value: name })));
      
    }
    getCharacters();
    
  }, []);

  return (
    <select
      
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {items.map(({ label, value }) => (
        <option key={label} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default function App() {
  return (
    <div className="App">
      <CharacterDropDown />
    </div>
  );
}
