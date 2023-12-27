import { FaXTwitter } from "react-icons/fa6";

const App = () => {
    return (
        <div className="flex py-12 items-center justify-center flex-col ">
            <img
                className="rounded-full"
                src="https://github.com/onesamket.png" alt="profile" />
            <a href="https://x.com/onesamket" target="_blank" className="my-3 flex space-x-1 items-center">
                <FaXTwitter /><p className="text-indigo-600">@onesamket</p>
            </a>
            <div className="py-10">
                <h2 className="font-bold text-3xl"> I'm Tewodros</h2>
                <p>Javascript Developer </p>
            </div>

        </div>
    )
}

export default App