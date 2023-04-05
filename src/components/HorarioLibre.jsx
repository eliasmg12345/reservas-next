import useReserva from '@/hooks/useReserva'

const HorarioLibre = () => {
    const { reservados } = useReserva()

    return (
        <div>
            {reservados.map(reserva => (
                <article
                    className='shadow shadow-gray-200'
                    key={reserva.idReserva}
                >
                    <p className='text-blue-500'><span className='text-black'>Nombre:</span> {reserva.nombre}</p>
                    <p className='text-gray-500'>{reserva.fecha} de: <span>{reserva.inicial} a {reserva.final}</span></p>
                </article>
            ))}
        </div>
    )
}

export default HorarioLibre