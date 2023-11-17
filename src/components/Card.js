// Card.js
import React, { useState } from 'react';

const Card = ({ card, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(card.body);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(card.id, editedBody);
    setIsEditing(false);
  };

  return (
    <div className="card">
      <h3>{card.title}</h3>
      {isEditing ? (
        <div>
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <p>{card.body}</p>
      )}
      <button onClick={() => onDelete(card.id)}>Delete</button>
      {!isEditing && <button onClick={handleEditClick}>Edit</button>}
    </div>
  );
};

export default Card;
