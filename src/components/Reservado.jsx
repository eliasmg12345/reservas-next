import useReserva from '@/hooks/useReserva'
import React from 'react'

const Reservado = ({ reservado }) => {
  const { handleEditarReserva, handleEliminarReserva } = useReserva()

  const { idReserva, nombre, fecha, cancha, inicial, final } = reservado

  return (
    <div className='shadow shadow-gray-500 flex justify-between p-5 mb-5 items-center'>
      <div className=''>

        <h3>Nombre: {nombre}</h3>
        <p>Cancha: {cancha}</p>
        <p>Fecha: {fecha}</p>
        <p>Hora: {inicial} - {final}</p>

      </div>
      <div className='p-8 items-center'>
        <button
          type='button'
          className='bg-sky-700 mr-1 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md'
          onClick={() => { handleEditarReserva(idReserva) }}
        >Editar</button>
        <button
          type='button'
          className='bg-red-700 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md mt-2'
          onClick={() => { handleEliminarReserva(idReserva)}}
        >Eliminar</button>
      </div>

    </div>
  )
}

export default Reservado