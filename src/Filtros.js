import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button onClick={() => filtrarTareas("Todas")}>Todas</Button>
      <Button onClick={() => filtrarTareas("Pendientes")}>Pendientes</Button>
      <Button onClick={() => filtrarTareas("Completadas")}>Completadas</Button>
    </ButtonGroup>
  );
}

export default Filtros;
