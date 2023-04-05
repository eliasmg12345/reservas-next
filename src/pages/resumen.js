import ResumenReserva from "@/components/ResumenReserva"
import useReserva from "@/hooks/useReserva"
import Layout from "@/layout/Layout"


const Resumen = () => {


    const { resumenReservas } = useReserva()


    console.log(resumenReservas);
    
    return (
        <Layout pagina={`Resumen`}>

            {resumenReservas.map((resumenReserva, i) => (

                <ResumenReserva
                    key={resumenReserva.id}
                    resumenReserva={resumenReserva}
                    numeroReserva={i}
                />
            ))}

        </Layout>
    )

}

export default Resumen