
const About = () => {
    return (
        <div className="w-1/2 mx-auto flex flex-col items-center justify-center gap-4 py-14">
            <h2 className="italic text-4xl">About Me</h2>
            <blockquote className="px-0">
                Hello, I'm Tewodros Birhanu, a passionate and experienced Fullstack JavaScript Developer. With a love for coding and a creative approach to problem-solving, Currently I'm student at Haramaya University. I specialize in crafting elegant, user-friendly, and high-performance web applications that not only look great but also rank well in search engines.
            </blockquote>
            <div className="flex space-x-1 items-center">
                <img src="https://github.com/onesamket.png" alt="profile" className="w-14 h-14 rounded-full object-fill" />
                <a href="https://x.com/onesamket" target="_blank" className="my-5 flex flex-col  ml-6">
                    <h3 className="font-semibold">Tewodros Birhanu</h3>
                    <p className="text-indigo-100">@onesamket</p>
                </a>
            </div>
        </div >
    )
}

export default About