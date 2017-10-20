import React from 'react';
import { Link } from 'react-router-dom';

const CampusItem = ({campus}) => {
  return (
    <li>
      <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
    </li>
  );
};

export default CampusItem;
