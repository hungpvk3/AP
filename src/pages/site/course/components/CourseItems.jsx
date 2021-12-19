import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../../components/card";

const CourseItems = ({ name, image }) => {
  return (
    <div>
      <Link to={`/course/${name}`}>
        <Card name={name} img={image} />
      </Link>
    </div>
  );
};

export default CourseItems;
