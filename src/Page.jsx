import { StrictMode } from 'react';
import Carrusel from './Carrusel';
import Box from './Box.jsx';
import Productos from './Productos.jsx';
import Favoritos from './Favoritos.jsx';
import Rutinas from './Rutinas.jsx';
function Page(){
    return(
        <StrictMode>
            <Carrusel></Carrusel>
            <Box></Box>
            <Productos></Productos>
            <Favoritos></Favoritos>
            <Rutinas></Rutinas>
        </StrictMode>
    )
}
export default Page;