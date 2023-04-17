import ResumenReserva from "@/components/ResumenReserva"
import useReserva from "@/hooks/useReserva"
import Layout from "@/layout/Layout"


const Resumen = () => {


    const { resumenReservas } = useReserva()


    console.log(resumenReservas);

    return (
        <Layout pagina={`Resumen`}>

            {resumenReservas.length ? (

                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Nro</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Cancha</th>
                            <th className="p-2">Fecha</th>
                            <th className="p-2">Tiempo</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {resumenReservas.map((resumenReserva, i) => (

                            <ResumenReserva
                                key={resumenReserva.id}
                                resumenReserva={resumenReserva}
                                numeroReserva={i}
                            />
                        ))}

                    </tbody>
                </table>

            ) : (
                <p className='text-center mt-10'>No hay reservas Aún</p>

            )
            }

        </Layout >
    )

}

export default Resumen