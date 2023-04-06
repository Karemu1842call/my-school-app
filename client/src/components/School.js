import React from "react";
import Button from 'react-bootstrap/Button';
import "./style/Login.css";
import "./style/School.css";

function School({ id, name, avatar, email, telno, onDelete }) {
  
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      className="bg-primary px-9 text-white py-32  mx-auto grid items-center card "
      value={id}
    >
      <h2>{name}</h2>
      <img src={avatar} alt={name} className="school-image" />
      <p> School Email: {email} </p>
      <p>School tel no: {telno} </p>
     <Button variant="outline-danger" onClick={handleDelete}> Delete</Button>
     <Button variant="outline-primary" href={`/updateform?id=${id}`}> Update / Add a new school</Button>
    </div>
  );
}

export default School;

