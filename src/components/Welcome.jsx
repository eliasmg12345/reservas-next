import { useState } from "react"
import Formulario from "./Formulario"
import HorarioLibre from "./HorarioLibre"


const Welcome = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)


    return (
        <div>
            <h1 className="font-bold text-pink-800 uppercase align-baseline text-3xl text-center">Bienvenidos</h1>
            <div
                className="flex gap-10"
            >
                <p>Nuestras Canchas</p>

                <div>
                    <p>Horarios Reservados</p>
                    <HorarioLibre />
                </div>


                <div>
                    <button
                        type="button"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 p-3 uppercase font-bold"
                        onClick={() => {
                            setMostrarFormulario(!mostrarFormulario)
                        }}
                    >
                        Realiza tu reserva
                    </button>
                    {
                        mostrarFormulario && (
                            <Formulario />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Welcome