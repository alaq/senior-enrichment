import React from 'react';

const CampusItem = ({campus}) => {
  return (
    <div>
      <strong>{campus.name}</strong>
    </div>
  );
};

export default CampusItem;
