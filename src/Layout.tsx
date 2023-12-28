/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Outlet } from "react-router-dom";
import TerminalHeader from "./components/Terminal";
import Loader from "./components/Loader";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import config from "./config";

const Layout = () => {
    const [init, setInit] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    // @ts-ignore 
    const options: ISourceOptions = useMemo(
        () => (config),
        [],
    );

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return <Loader />;

    return (
        <div className="flex flex-col h-screen bg-inherit text-white">
            <Particles className="-z-50" id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            <div className="flex flex-col md:flex-row">
                <TerminalHeader />
                <main className="mx-auto flex items-center justify-center">
                    {loading ? <Loader /> : <Outlet />}
                </main>
            </div>
        </div>
    );
};

export default Layout;
