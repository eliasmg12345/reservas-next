import Reservados from "@/components/Reservados";
import useReserva from "@/hooks/useReserva"
import Layout from "@/layout/Layout";


const Reservado = () => {

    const { reservados } = useReserva()
    
    console.log(reservados);
    return (
        <Layout pagina={`Reservado`}>
            {reservados.map((reservado) => (
                <Reservados
                    key={reservado.idReserva}
                    reservado={reservado}
                />
            ))}
        </Layout>
    )
}

export default Reservado