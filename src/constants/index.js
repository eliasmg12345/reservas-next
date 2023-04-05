export const CANCHAS = [
    { id: 1, nombre: "A" },
    { id: 2, nombre: "B" },
    { id: 3, nombre: "C" },
]


export const RESERVAS = [
    {
        "id": "1680194345155",
        "nombre": "elias Acrualizado",
        "cancha": "2",
        "fecha": "2023-04-01",
        "inicial": "12:12",
        "final": "12:33"
    },
    {
        "id": "1680194366239",
        "nombre": "cecilia",
        "cancha": "1",
        "fecha": "2023-03-31",
        "inicial": "12:33",
        "final": "00:00"
    },
    {
        "id": "1680194398092",
        "nombre": "belen quispe chambi",
        "cancha": "2",
        "fecha": "2023-03-30",
        "inicial": "12:42",
        "final": "13:40"
    }
]

export const formatearFecha = fecha => {
    return fecha.toLocaleDateString()
}


/*
localStorage.setItem('reservados', JSON.stringify(reservados))
JSON.parse(localStorage.getItem('reservados')) && []

*/