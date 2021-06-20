import React, { useState } from "react";
import axios from "axios";

function Add_section() {
  const [name, setName] = useState("");
  const [max_students, setmax_students] = useState("");
  const [items, setItems] = React.useState([]);
  const [class_name, setValue] = React.useState("");

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const get_class = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/api/classroom");
     const result = await response.json();
 
      setItems(result.map(({ id, name }) => ({ key: id, class_name: name })));
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      name: name,

      max_students: max_students,
      classroom_id: class_name,
    };
    axios
      .post("http://localhost:8000/api/section", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setmax_students("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };
  React.useEffect(() => {
    get_class();
  }, []);
  return (
    <div className="container p-3">
      <h5 className="d-inline-block mb-3">add section</h5>
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="max_students">max student</label>
          <input
            type="text"
            className="form-control"
            id="max_students"
            placeholder=" max student number "
            value={max_students}
            onChange={(e) => setmax_students(e.target.value)}
          />
        </div>
        <select value={class_name} onChange={(e) => setValue(e.currentTarget.value)}>
          {items.map(({ key, class_name }) => (
            <option key={key} value={key}>
              {class_name}
            </option>
          ))}
        </select>

        {isError && (
          <small className="mt-3 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default Add_section;
