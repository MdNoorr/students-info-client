import React from "react";
import { Link, useParams } from "react-router-dom";

const Card = ({ student }) => {
  const { id } = useParams();
  return (
    <div className="container2">
      <div className="card2"
        style={{
          border: "3px solid blue",
          padding: "10px",
          margin: "10px",
          borderradius: "15px",
          textAlign: "center",
          
        }}
      >
        <img height="100px" src={student.imageURL} alt="" />
        <h3>{student.fullName}</h3>
        <p>{student.email}</p>
        <Link to={`/student/${student._id}`}>
          <button className="btn btn-primary">Details</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card;
