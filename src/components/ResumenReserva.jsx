import useReserva from "@/hooks/useReserva"

const ResumenReserva = ({ resumenReserva, numeroReserva }) => {
    const { handleEditarResumenReserva, handlePublicarReserva, handleEliminarResumenReserva } = useReserva()

    const { id, nombre, fecha, cancha, inicial, final } = resumenReserva
    return (
        <div className="shadow shadow-gray-500 flex justify-between p-5 mb-5 items-center">
            <div>

                <h1 className="font-bold">{`Reserva ${numeroReserva + 1}`}</h1>
                <p>Nombre: {nombre}</p>
                <p>Cancha: {cancha}</p>
                <p>Fecha: {fecha}</p>
                <p>Desde las: {inicial}</p>
                <p>Hasta las: {final}</p>
            </div>
            <div>
                <button
                    type="button"
                    className="bg-indigo-500 flex gap-2 px-5 py-2 text-white rounded uppercase shadow-md mt-3"
                    onClick={() => {
                        handlePublicarReserva(id)
                    }}
                >
                    Publicar
                </button>



                <button
                    type="button"
                    className="bg-emerald-700 flex gap-2 px-5 py-2 text-white rounded uppercase shadow-md mt-3"
                    onClick={() => {
                        handleEditarResumenReserva(id)
                    }}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-rose-700 flex gap-2 px-5 py-2 text-white rounded uppercase shadow-md mt-3"
                    onClick={() => { handleEliminarResumenReserva(id) }}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default ResumenReserva