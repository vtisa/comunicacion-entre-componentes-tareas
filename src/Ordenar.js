import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

function Ordenar({ ordenarTareas }) {
  return (
    <ButtonGroup variant="contained" color="secondary">
      <Button onClick={() => ordenarTareas("asc")}>Ascendente</Button>
      <Button onClick={() => ordenarTareas("desc")}>Descendente</Button>
    </ButtonGroup>
  );
}

export default Ordenar;
