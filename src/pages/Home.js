import React, { useState } from "react";
import axios from "axios";

function Add_student() {
  const [fname, setName] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setgender] = useState("");
  const [bloodtype, setbloodtype] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [mothername, setmothername] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [photo, setphoto] = useState("");
  const [section_id, setsection_id] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      middlename: middlename,
      mothername: mothername,
      photo: photo,

      gender: gender,
      birthdate: birthdate,
      bloodtype: bloodtype,
      section_id: section_id,
    };
    axios
      .post("http://127.0.0.1:8000/api/student", data)
      .then((res) => {
        setData(res.data);
        setName("");
        setlname("");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  return (
    <div className="container p-3">
     
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            placeholder="Enter name"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            placeholder="Enter name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="name">email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter name"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="name">phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter name"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>

        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            middlename
          </label>
          <input
            type="text"
            className="form-control"
            id="middlename"
            placeholder="Enter lname"
            value={middlename}
            onChange={(e) => setmiddlename(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            mothername
          </label>
          <input
            type="text"
            className="form-control"
            id="mothername"
            placeholder="Enter lname"
            value={mothername}
            onChange={(e) => setmothername(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            photo
          </label>
          <input
            type="text"
            className="form-control"
            id="photo"
            placeholder="Enter lname"
            value={photo}
            onChange={(e) => setphoto(e.target.value)}
          />
        </div>

        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            birthdate
          </label>
          <input
            type="text"
            className="form-control"
            id="birthdate"
            placeholder="Enter lname"
            value={birthdate}
            onChange={(e) => setbirthdate(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter lname"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="lname" className="mt-2">
            bloodtype
          </label>
          <input
            type="text"
            className="form-control"
            id="bloodtype"
            placeholder="Enter lname"
            value={bloodtype}
            onChange={(e) => setbloodtype(e.target.value)}
          />
        </div>
        <div classNames="form-group">
          <label htmlFor="section_id" className="mt-2">
            section_id
          </label>
          <input
            type="text"
            className="form-control"
            id="section_id"
            placeholder="Enter lname"
            value={section_id}
            onChange={(e) => setsection_id(e.target.value)}
          />
        </div>

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
        {data && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Add_student;
