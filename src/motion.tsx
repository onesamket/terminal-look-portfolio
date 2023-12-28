import { Outlet } from "react-router-dom";
import TerminalHeader from "./components/Terminal";
import Loader from "./components/Loader";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Layout = () => {
    const [init, setInit] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {

                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return <Loader />;

    return (
        <div className="flex flex-col h-screen bg-inherit text-white">
            <Particles className="-z-50" id="tsparticles" particlesLoaded={particlesLoaded} options={options} />

            <div className="flex-grow flex">
                <TerminalHeader />

                <main className="flex-grow mx-auto overflow-hidden">
                    {loading ? <Loader /> : <Outlet />}
                </main>
            </div>
        </div>
    );
};

export default Layout;
