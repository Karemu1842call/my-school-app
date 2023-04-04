import React from "react";
import React, { useEffect, useState } from "react";
import Class from "../components/Class";

function Cohortdata() {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    fetch("/cohorts")
      .then((r) => r.json())
      .then((data) => setCohorts(data));
  }, []);

  const SimplifyData = cohorts.map((item) => (
    <Class key={item.id} id={item.id} name={item.coursename} image={item.courseavatar} />
  ));
  return <>{SimplifyData}</>;
}

export default Cohortdata;
