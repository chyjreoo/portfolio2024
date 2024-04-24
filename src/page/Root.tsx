import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header";


function Root() {
    return (
        <div>
            <ScrollRestoration />
            <Header />
            <Outlet />
        </div>
    )
}

export default Root