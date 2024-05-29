import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import Ordenar from './Ordenar';
import { Container, Typography, Box, Grid } from '@mui/material';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [orden, setOrden] = useState("asc");

  const agregarTarea = (texto) => {
    if (texto.length === 0 || texto.length > 100) {
      alert('La tarea no puede estar vacía o ser demasiado larga.');
      return;
    }
    setTareas([...tareas, { texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    if (nuevoTexto.length === 0 || nuevoTexto.length > 100) {
      alert('La tarea no puede estar vacía o ser demasiado larga.');
      return;
    }
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = (orden) => {
    setOrden(orden);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  tareasFiltradas = tareasFiltradas.sort((a, b) => {
    return orden === 'asc' ? a.fecha - b.fecha : b.fecha - a.fecha;
  });

  return (
    <Container>
      <Typography variant="h2" gutterBottom align="center">Lista de Tareas</Typography>
      <Box mb={4}>
        <TareaForm agregarTarea={agregarTarea} />
      </Box>
      <Box mb={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Filtros filtrarTareas={filtrarTareas} />
          </Grid>
          <Grid item>
            <Ordenar ordenarTareas={ordenarTareas} />
          </Grid>
        </Grid>
      </Box>
      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        toggleCompletada={toggleCompletada}
      />
    </Container>
  );
}

export default App
