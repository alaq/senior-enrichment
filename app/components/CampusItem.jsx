import React from 'react';
import { Link } from 'react-router-dom';

const CampusItem = ({campus}) => {
  return (
    <div>
      <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
      {/* <img src={`${campus.image}`} /> */}
    </div>
  );
};

export default CampusItem;
