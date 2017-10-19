import React from 'react';
import { Link } from 'react-router-dom';


const StudentItem = ({student}) => {

  return (
    <div>
      <Link to={`/student/${student.id}`}>{student.name}</Link>
    </div>
  );
};

export default StudentItem;
