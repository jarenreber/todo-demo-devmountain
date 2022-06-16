import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("We are going to the details page, looking for: Squirtle.");
    navigate("/details/squirtle");
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Detail Page</button>
    </div>
  );
};

export default About;
