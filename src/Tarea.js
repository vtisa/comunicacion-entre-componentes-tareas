import React, { useState } from 'react';
import { ListItem, Checkbox, IconButton, TextField } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <IconButton onClick={handleSaveClick}>
            <Save />
          </IconButton>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>{tarea}</span>
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={handleEditClick}>
            <Edit />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default Tarea
