import { FaXTwitter } from "react-icons/fa6";
import profile from '../assets/profile.jpg';
const App = () => {
    return (
        <div className="flex h-screen  py-12 items-center  flex-col md:flex-row-reverse justify-between">
            <img
                className=" h-1/2 md:h-screen md:w-[500px] object-fit"
                src={profile} alt="profile" />
            {/* <a href="https://x.com/onesamket" target="_blank" className="my-3 flex space-x-1 items-center">
                <FaXTwitter /><p className="text-indigo-600">@onesamket</p>
            </a> */}
            <div className=" py-10 flex flex-col">
                <div>

                    <h2 className="font-bold text-3xl"> I'm Tewodros</h2>
                    <p>Javascript Developer </p>
                </div>
                <a href="https://x.com/onesamket" target="_blank" className="my-3 flex space-x-1 items-center ml-6">
                    <FaXTwitter /><p className="text-indigo-100">@onesamket</p>
                </a>
            </div>

        </div>
    )
}

export default App