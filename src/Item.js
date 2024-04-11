import React from 'react';

const Item = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)}>Delete</button>
      <button onClick={() => onEdit(item.id)}>Edit</button>
    </div>
  );
}

export default Item;
