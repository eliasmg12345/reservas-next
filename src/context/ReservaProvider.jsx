import { RESERVAS } from "@/constants"

//const { createContext, useState, useEffect } = require("react")
import { createContext, useState, useEffect } from "react"
const ReservaContext = createContext()

const DATOS = {
    id: '',
    nombre: '',
    cancha: '',
    fecha: '',
    inicial: '',
    final: ''
}
const ReservaProvider = ({ children }) => {


    const [datos, setDatos] = useState(DATOS)
    const [reservados, setReservados] = useState([])
    const [reservado, setReservado] = useState({})
    const [resumenReservas, setResumenReservas] = useState([])
    const [resumenReserva, setResumenReserva] = useState({})
    const [modalResumen, setModalResumen] = useState(false)
    const [modalReserva, setModalReserva] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
            id: Date.now().toString(),
        })
    }

    useEffect(() => {

        if (!resumenReservas.length) {
            setResumenReservas([...RESERVAS])
        }
    }, [resumenReservas])


    const adicionarReserva = () => {
        console.log('re');

        setResumenReservas([...resumenReservas, datos])
        setDatos(DATOS)

    }

    const handleSetResumenReserva = resumenReserva => {
        setResumenReserva(resumenReserva)
    }

    const handleChangeModalReserva = () => {
        setModalReserva(!modalReserva)
    }

    const handleChangeModalResumen = () => {
        setModalResumen(!modalResumen)
    }

    const handleEditarResumenReserva = id => {
        const reservaActualizar = resumenReservas.filter(reserva => reserva.id === id)
        setResumenReserva(reservaActualizar[0])
        setModalResumen(!modalResumen)
    }

    const ActualizarResumenReserva = ({ ...reserva }) => {

        if (resumenReservas.some(reserv => reserv.id === reserva.id)) {
            //actulizando
            const resumenReservaActualizado = resumenReservas.map(reservaState => reservaState.id === reserva.id ? reserva : reservaState)
            setResumenReservas(resumenReservaActualizado)
        }
        else {
            setResumenReservas([...resumenReservas, reserva])
        }
        setModalResumen(false)
    }

    const handleEliminarResumenReserva = id => {
        const resumenReservaActualizado = resumenReservas.filter(resumen => resumen.id !== id)
        setResumenReservas(resumenReservaActualizado)
    }

    const handlePublicarReserva = id => {

        const reservaPublicar = resumenReservas.filter(reserva => reserva.id === id)
        const idReserva = Date.now().toString()
        const { nombre, cancha, fecha, inicial, final } = reservaPublicar[0]

        setReservados([...reservados, { nombre, cancha, fecha, inicial, final, idReserva }])
    }

    const handleEditarReserva = idReserva => {
        const reservaActualizar = reservados.filter(reser => reser.idReserva === idReserva)
        setReservado(reservaActualizar[0])
        setModalReserva(!modalReserva)
    }

    const ActualizarReserva = ({ ...reserva }) => {
        if (reservados.some(reserv => reserv.idReserva === reserva.idReserva)) {
            //actualizando
            const reservaActualizado = reservados.map(reservaState => reservaState.idReserva === reserva.idReserva ? reserva : reservaState)
            setReservados(reservaActualizado)
        }
        else {
            setReservados([...reservados, reserva])
        }
        setModalReserva(false)
    }

    const handleEliminarReserva = idReserva => {
        const reservaActualizado = reservados.filter(reserva => reserva.idReserva !== idReserva)
        setReservados(reservaActualizado)
    }

    return (
        <ReservaContext.Provider
            value={{
                datos,
                handleChangeDatos,
                adicionarReserva,
                reservados,
                resumenReservas,
                handleChangeModalReserva,
                handleChangeModalResumen,
                modalResumen,
                modalReserva,
                resumenReserva,
                handleSetResumenReserva,
                handleEditarResumenReserva,
                ActualizarResumenReserva,
                handleEliminarResumenReserva,
                handlePublicarReserva,
                handleEditarReserva,
                reservado,
                ActualizarReserva,
                handleEliminarReserva,
            }}
        >
            {children}
        </ReservaContext.Provider>
    )
}

export { ReservaProvider }

export default ReservaContext