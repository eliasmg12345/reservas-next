import Reservado from "@/components/Reservado";
import useReserva from "@/hooks/useReserva"
import Layout from "@/layout/Layout";


const reservado = () => {

    const { reservados } = useReserva()
    
    console.log(reservados);
    return (
        <Layout pagina={`Reservado`}>
            {reservados.map((reservado) => (
                <Reservado
                    key={reservado.idReserva}
                    reservado={reservado}
                />
            ))}
        </Layout>
    )
}

export default reservado