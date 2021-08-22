import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://intense-cliffs-55882.herokuapp.com/studentDetails")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div className="">
      <div className="">
        {students.map((student) => (
          <Card student={student} key={student._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
