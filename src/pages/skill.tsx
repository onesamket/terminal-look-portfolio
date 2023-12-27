import { FaReact, FaNodeJs, FaSquareJs, FaHtml5 } from "react-icons/fa6"
import { TbBrandNextjs, TbBrandPrisma, TbBrandSvelte } from 'react-icons/tb';
import { DiMongodb, DiPostgresql, DiSass } from "react-icons/di";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
const Skill = () => {
    return (
        <div className="py-12">
            <h2 className="text-3xl flex items-center justify-center" >Tech Stack</h2>
            <main className=" flex flex-col space-y-10 my-5">
                <div className="flex items-center justify-center flex-col space-y-2 ">
                    <h2>Front-end</h2>
                    <ul className="flex space-x-3">
                        <li><FaHtml5 className="text-xl" /></li>
                        <li><DiSass className="text-xl" /></li>
                        <li><BiLogoTailwindCss className="text-xl" /></li>
                        <li><FaSquareJs className="text-xl" /></li>
                        <li><TbBrandSvelte className="text-xl" /></li>
                        <li><BiLogoTypescript className="text-xl" /></li>
                        <li><FaReact className="text-xl" /></li>
                    </ul>
                </div>

                {/* back end  */}
                <div className="flex items-center justify-center flex-col space-y-2 ">
                    <h2>Back-end</h2>
                    <ul className="flex space-x-3">
                        <li><FaNodeJs className="text-xl" /></li>
                        <li><TbBrandNextjs className="text-xl" /></li>
                    </ul>
                </div>
                {/* database */}
                <div className="flex items-center justify-center flex-col space-y-2 ">
                    <h2>Databases</h2>
                    <ul className="flex space-x-3">
                        <li><DiPostgresql className="text-xl" /></li>
                        <li><GrMysql className="text-xl" /></li>
                        <li><DiMongodb className="text-xl" /></li>
                        <li><TbBrandPrisma className="text-xl" /></li>
                    </ul>
                </div>
            </main>

        </div>
    )
}

export default Skill;