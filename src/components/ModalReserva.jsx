import { CANCHAS } from '@/constants'
import useReserva from '@/hooks/useReserva'
import React, {  useState } from 'react'

const ModalReserva = () => {
    const { reservado, handleChangeModalReserva, ActualizarReserva } = useReserva()

    const [actualizadoReserva, setActualizadoReserva] = useState(reservado)

    const [edicion, setEdicion] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (Object.values(actualizadoReserva).includes('')) {
            console.log('son obligatorios');
            return
        }

        ActualizarReserva(actualizadoReserva)
    }
    const handleChangeDatos = e => {

        setActualizadoReserva({
            ...actualizadoReserva,
            [e.target.name]: e.target.value
        })
        setEdicion(true)
    }



    return (
        <div className="md:flex gap-10">

            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleChangeModalReserva}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>


            <form action=""
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="bg-gray-200 mt-3 p-2 rounded-md"
                        value={actualizadoReserva.nombre}
                        onChange={e => handleChangeDatos(e)}
                    />

                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="cancha">Cancha</label>

                    <select
                        name="cancha"
                        className="p-3 bg-white"
                        onChange={e => handleChangeDatos(e)}
                        value={actualizadoReserva.cancha}
                    >
                        <option value="">--Seleccione la Cancha---</option>
                        {CANCHAS.map(cancha => (
                            <option
                                key={cancha.id}
                                value={cancha.id}
                            >
                                {cancha.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="fecha">Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        id="fecha"
                        onChange={e => handleChangeDatos(e)}
                        value={actualizadoReserva.fecha}
                    />
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="inicial">Hora inicio</label>
                    <input
                        type="time"
                        name="inicial"
                        id="inicial"
                        onChange={e => handleChangeDatos(e)}
                        value={actualizadoReserva.inicial}
                    />
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="final">Hora fin</label>
                    <input
                        type="time"
                        name="final"
                        id="final"
                        onChange={e => handleChangeDatos(e)}
                        value={actualizadoReserva.final}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value={`${edicion ? 'guardar cambios' : 'cancelar'}`}
                />

            </form>
        </div>
    )

}

export default ModalReserva