import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    fetch(`https://intense-cliffs-55882.herokuapp.com/studentDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

    // Delete a registered user
    const handleDeleteEvent = (id) => {
      if (window.confirm("Are you sure to delete this task permanently?")) {
        console.log("delete clicked", id);
        fetch(`https://intense-cliffs-55882.herokuapp.com/deleteTask/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result, "Task deleted");
            if (result) {
              const newVolList = studentDetails.filter((task) => task._id !== id);
              setStudentDetails(newVolList);
            }
          });
      }
    };
  return (
    <div className="container">
      {/* this is a description {id} */}
      <div  style={{border:"3px solid powderBlue", padding:"10px", margin: "10px", borderRadius: "5px", textAlign: "center"}}>
        <h2>Full Name : {details.fullName}</h2>
        <p>Email Address : {details.email}</p>
        <p>Phone Number : {details.phone}</p>
        <p>Address : {details.address}</p>
        <img src={details.imageURL} alt="" />
        <br />
        <br />

        <button onClick={() => handleDeleteEvent(details._id)} className="btn btn-danger">Delete Student Details</button>
      </div>
    </div>
  );
};

export default StudentDetails;
