import React from 'react';
import { Link } from 'react-router-dom';


const StudentItem = ({student}) => {

  return (
    <li>
      <Link to={`/student/${student.id}`}>{student.name}</Link>
    </li>
  );
};

export default StudentItem;
