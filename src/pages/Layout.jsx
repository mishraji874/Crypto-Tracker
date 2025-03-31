import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
    return (
        <>
            <Navbar /> {/*This navbarr is the shared ui we want to across pages */}
            <Outlet /> {/*The actual page which will be rendered along with navbar*/}
        </>
    )
}

export default MainLayout;