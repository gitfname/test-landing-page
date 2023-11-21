
function Hero() {
    return (
        <div className="relative grid place-items-center grid-cols-1">
            <img
                alt="hero"
                src="/hero-image.jpg"
                className="w-full h-auto object-center object-cover col-start-1 row-start-1"
            />

            <div className="w-72 aspect-square rounded-full bg-blue-500/50 absolute top-1/2 -translate-y-1/2 left-44 z-10"></div>

            <div className="w-7/12 z-10 col-start-1 row-start-1">
                <h1 className="text-4xl font-josefin text-white font-bold leading-10">
                    Meaningful investments in<br />
                    Main Street businesses
                </h1>

                <p className="text-lg text-white font-normal font-josefin mt-10 leading-5">
                    Browse vetted investment offerings in<br /> communities all over the US.
                </p>

                <button className="btn btn-primary mt-10 text-white uppercase pt-0 pb-0 py-6 px-10">
                    get started
                </button>
            </div>
        </div>
    )
}

export default Hero