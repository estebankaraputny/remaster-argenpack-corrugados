import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ModalChat from "../ModalChat/ModalChat";
import "./Layout.css";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="container-main">{children}</main>
            <Footer />
            <ModalChat />
        </>
    )
}

export default Layout;