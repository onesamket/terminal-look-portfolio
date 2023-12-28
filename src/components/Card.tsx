
import { Card as Container } from 'primereact/card';
import { SAMPLE_PROJECTS } from '../assets/projects';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa6';

export default function Card() {

    return (
        <div className='flex  w-full px-7  sm:w-2/3 md:w-2/3 flex-col justify-center items-center mx-auto space-y-5 '>
            <h1 className='text-balance text-xl font-bold my-1 py-2'>Projects</h1>
            <main>
                {SAMPLE_PROJECTS.map(project => (
                    <div key={project.projectURL} className="">
                        <Container
                            title={() => <p className=' text-base md:text-xl md:font-semibold'>{project.title}</p>}
                            subTitle={() => <p className='hidden md:flex'>{project.description}</p>}
                            footer={() =>
                                <div className='w-full flex justify-around'>
                                    <Link to={project.projectURL}><FaGithub className="text-xl text-white" /></Link>
                                    <Link to={project.projectURL}><FaLink className="text-xl text-white" /></Link>
                                </div>}
                            className=" md:w-25rem bg-inherit my-4  border-[0.5px] md:border-0  border-slate-700 shadow-md  rounded text-gray-300"
                        />
                    </div>
                ))}
            </main>
        </div>
    )
}
