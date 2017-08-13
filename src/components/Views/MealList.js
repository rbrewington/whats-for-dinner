import React from 'react';

const MealList = ({ title = '', color = '#000000' }) => {
  return (
    <p style={{ color, flexGrow: 1 }}>
      {title}
    </p>
  );
};

export default MealList;
