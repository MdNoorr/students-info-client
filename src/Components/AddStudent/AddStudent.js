import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const [imageURL, setIMageURL] = useState(null);
  const { register, handleSubmit } = useForm();

  const [status, setStatus] = useState(false);

  // const onSubmit = (data) => console.log(data.example);

  const onSubmit = (data) => {
    const eventData = {
      fullName: data.fullName,
      email: data.Email,
      phone: data.Phone,
      address: data.Address,
      imageURL: imageURL,
    };
    // console.log(imageURL);
    console.log(eventData);
    const url = `https://intense-cliffs-55882.herokuapp.com/addStudentDetails`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => {
      setStatus(!status);
      console.log("server side response", res);
    });
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3bf611709a66f10235dc571bef1be14a");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container m-5">
      <h1 className="text-center text-success page-header mb-5">
        Add Your Student Information
      </h1>

      {status && (
        <div className="alert alert-success text-center" role="alert">
          New task added successfully
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          defaultValue="MS Khadija"
          placeholder="Enter Your Full Name"
          {...register("fullName")}
        />
        <br />
        <input
          className="form-control"
          placeholder="Enter Your Email Address"
          {...register("Email")}
        />
        <br />
        <input
          className="form-control"
          placeholder="Enter Your Phone Number"
          {...register("Phone")}
        />
        <br />

        <input
          className="form-control"
          placeholder="Enter Your Address"
          {...register("Address")}
        />
        <br />

        <input
          className="form-control"
          placeholder="Upload Your Picture"
          type="file"
          onChange={handleImageUpload}
        />
        <br />

          <input className="btn btn-success" type="submit" />
      </form>
    </div>
  );
};

export default AddStudent;
