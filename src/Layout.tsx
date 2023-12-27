import { Outlet } from "react-router-dom";
import TerminalHeader from "./components/Terminal";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

const Layout = () => {
    const [loading, setLoading] = useState(true); // Set initial state to true

    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Switch to false after 5000 milliseconds
        }, 5000);
    }, []);

    return (
        <div className="flex bg-slate-950 text-white">
            <TerminalHeader />

            <main className="mx-auto">
                {loading ? <Loader /> : <Outlet />}
            </main>
        </div>
    );
};

export default Layout;
