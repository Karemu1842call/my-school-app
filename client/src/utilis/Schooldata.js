import React, { useEffect, useState } from "react";
import School from "../components/School";

function Schooldata() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/schools")
      .then((response) => response.json())
      .then((data) => setSchools(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`/schools/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedSchools = schools.filter((school) => school.id !== id);
        setSchools(updatedSchools);
      })
      .catch((error) => console.error(error));
  };

  const schoolComponents = schools.map((school) => (
    <School
      key={school.id}
      id={school.id}
      name={school.sch_name}
      avatar={school.sch_avatar}
      email={school.sch_email}
      telno={school.sch_telno}
      onDelete={() => handleDelete(school.id)}
    />
  ));

  return <>{schoolComponents}</>;
}

export default Schooldata;
