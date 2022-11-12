import React from 'react';
import '../css/Testimonio.css';

function Testimonio(props){
  return(
    <div className='contenedor'>
      <img className='imagen' src={require(`../img/${props.imagen}.png`)} alt={(`Foto de ${props.foto} `)} />
      <div className='texto'>
        <p className='nombre'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='cargo'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='descripcion'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;