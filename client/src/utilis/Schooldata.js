import School from "../components/School";
import React, { useEffect, useState } from "react";
function Schooldata() {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("/schools")
      .then((r) => r.json())
      .then(setSchools);
  }, 
  
  [],
  );

  const breakFirstData =schools.map((school) => (
    <School
    key={school.id}
    value={school.id}
    name={school.sch_name}
    avatar={school.sch_avatar}
    email={school.sch_email}
    telno={school.sch_telno}

    />
  ));
  return <>{breakFirstData}</>;
}

export default Schooldata;