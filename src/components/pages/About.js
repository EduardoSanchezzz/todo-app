import React from "react";
import "../../App.css";

function About() {
  return (
    <div className="about">
      <h1> About </h1>
      <p>
        {" "}
        Functional ToDo List WebApp created with React, HTML, CSS, BootStrap{" "}
      </p>
      <p>
        Uses axiosJS to send and receive data from
        https://jsonplaceholder.typicode.com/
      </p>
      <p>Created By Eduardo Sanchez</p>
    </div>
  );
}

export default About;
