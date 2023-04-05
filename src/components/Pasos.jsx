import { useRouter } from "next/router"

const pasos = [
    { paso: 1, nombre: "Welcome", url: "/" },
    { paso: 2, nombre: "Resumen", url: "/resumen" },
    { paso: 3, nombre: "Reservado", url: "/reservado" },
]
const Pasos = () => {

    const router = useRouter()

    return (
        <>
            <div className='flex justify-between mb-5'>
                {pasos.map(paso => (
                    <button
                        onClick={() => {
                            router.push(paso.url)
                        }}
                        key={paso.paso}
                        className='text-2xl font-bold'
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>

        </>
    )
}

export default Pasos