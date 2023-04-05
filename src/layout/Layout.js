import Head from "next/head"
import Pasos from "../components/Pasos"
import Modal from "react-modal"
import useReserva from "@/hooks/useReserva";
import ModalResumen from "@/components/ModalResumen";
import ModalReserva from "@/components/ModalReserva";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

const Layout = ({ children, pagina }) => {
    const { modalResumen, modalReserva } = useReserva()
    return (
        <>
            <Head>
                <title>{pagina}</title>
            </Head>
            <div>
                <aside>

                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen">
                    <div className="p-5">
                        <Pasos />
                        {children}
                    </div>
                </main>
            </div>

            {modalResumen && (
                <Modal isOpen={modalResumen} style={customStyles}>
                    <ModalResumen />
                </Modal>
            )}
            {modalReserva && (
                <Modal isOpen={modalReserva} style={customStyles}>
                    <ModalReserva />
                </Modal>
            )}
        </>
    )
}

export default Layout