import { CANCHAS } from "@/constants"
import useReserva from "@/hooks/useReserva"


const Formulario = () => {

    const { datos, handleChangeDatos, adicionarReserva } = useReserva()

    const handleSubmit = e => {
        e.preventDefault()

        if (Object.values(datos).includes('')) {
            console.log('son obligatorios');
            return
        }

        adicionarReserva()

    }
    return (
        <>
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
                        onChange={e => handleChangeDatos(e)}
                        value={datos.nombre}
                    />
                    <input
                        type="hidden"
                        name="id"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.id}
                    />
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="cancha">Cancha</label>

                    <select
                        name="cancha"
                        className="p-3 bg-white"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.cancha}
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
                        value={datos.fecha}
                    />
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="inicial">Hora inicio</label>
                    <input
                        type="time"
                        name="inicial"
                        id="inicial"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.inicial}
                    />
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase" htmlFor="final">Hora fin</label>
                    <input
                        type="time"
                        name="final"
                        id="final"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.final}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value='Añadir'
                />

            </form>
        </>
    )
}

export default Formulario