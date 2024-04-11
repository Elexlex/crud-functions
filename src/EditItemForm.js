import React, { useState, useEffect } from 'react';

const EditItemForm = ({ item, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    onSave(item.id, { name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditItemForm;
