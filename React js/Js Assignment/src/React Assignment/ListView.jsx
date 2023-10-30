// ListView.jsx

import React from 'react';

function ListView({ items }) {
  return (
    <ul style={{
      color:"white",
      listStyle:"none"
    }}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListView;
