import React, { useState } from 'react';
import initialData from './data';
import ItemList from './ItemList';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

const App = () => {
  const [items, setItems] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleSaveEdit = (id, updatedItem) => {
    setItems(items.map(item => (item.id === id ? { ...item, ...updatedItem } : item)));
    setEditingItemId(null);
  };

  const handleAdd = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]);
  };

  return (
    <div>
      <h1>Object List</h1>
      {editingItemId ? (
        <EditItemForm
          item={items.find(item => item.id === editingItemId)}
          onSave={handleSaveEdit}
        />
      ) : (
        <>
          <AddItemForm onAdd={handleAdd} />
          <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />
        </>
      )}
    </div>
  );
}

export default App;
