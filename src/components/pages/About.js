import React from "react";

function About() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default About;
