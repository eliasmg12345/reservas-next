import useReserva from "@/hooks/useReserva"

const ResumenReserva = ({ resumenReserva, numeroReserva }) => {
    const { handleEditarResumenReserva, handlePublicarReserva, handleEliminarResumenReserva } = useReserva()

    const { id, nombre, fecha, cancha, inicial, final } = resumenReserva
    return (
            <tr className="border-b border-gray-500">
                <td className="p-3">{numeroReserva+1}</td>
                <td className="p-3">
                    <p className="text-gray-900">{nombre}</p>
                </td>

                <td className="p-3">
                    <p className="text-gray-700">{cancha}</p>
                </td>

                <td className="p-3">
                    <p className="text-gray-700">{fecha}</p>
                </td>

                <td className="p-3">
                    <p className="text-gray-700">{inicial} - {final}</p>
                </td>

                <td className="p-3 gap-3">
                    <button
                        type="button"
                        className="bg-indigo-500 px-1 py-1 text-white rounded uppercase shadow-md m-1"
                        onClick={() => {
                            handlePublicarReserva(id)
                        }}
                    >
                        Publicar
                    </button>
                
                    <button
                        type="button"
                        className="bg-emerald-700 px-1 py-1 text-white rounded uppercase shadow-md m-1"
                        onClick={() => {
                            handleEditarResumenReserva(id)
                        }}
                    >
                        Editar
                    </button>
                
                    <button
                        type="button"
                        className="bg-rose-700 px-1 py-1 text-white rounded uppercase shadow-md m-1"
                        onClick={() => { handleEliminarResumenReserva(id) }}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
    )
}

export default ResumenReserva