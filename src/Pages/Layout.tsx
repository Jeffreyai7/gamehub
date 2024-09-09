import { Outlet } from "react-router-dom";
import NavBar from "../componenets/NavBar";

function Layout() {
    return (
            <>
            <NavBar/>
            <Outlet/>
            </>
    );
}

export default Layout;