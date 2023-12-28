const Loader = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="loader w-12 h-12 relative animate-spin">
                <div className="bg-gray-700 w-4 h-4 rounded-full absolute top-0 left-0"></div>
                <div className="bg-gray-700 w-4 h-4 rounded-full absolute top-0 right-0"></div>
                <div className="bg-gray-700 w-4 h-4 rounded-full absolute bottom-0 left-0"></div>
                <div className="bg-gray-700 w-4 h-4 rounded-full absolute bottom-0 right-0"></div>
            </div>
        </div>
    )
}

export default Loader;
