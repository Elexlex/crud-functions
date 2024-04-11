import React from 'react';
import Item from './Item';

const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ItemList;
