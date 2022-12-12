import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastname, setlastname] = useState("");
  let [phone, setPhone] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setlastname("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={(e) => setlastname(e.target.value)}
        type="text"
        placeholder="lastname"
        value={lastname}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
        value={phone}
      />
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
};

export default AddContact;
