import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(texto);
    setTexto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nueva Tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar Tarea
      </Button>
    </form>
  );
}

export default TareaForm;
