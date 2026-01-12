import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="container-main">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;