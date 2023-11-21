import Card1 from "../../components/Card1/Card1"
import Hero from "../../components/Hero/Hero"

function HomePage() {
    return (
        <div className="pb-10">
            <Hero />

            <div>
                <div className="mt-40 w-max mx-auto p-1">
                    <h2 className="text-3xl font-bold text-slate-900 font-josefin text-center">
                        Offering open for investment
                    </h2>

                    <p className="text-sm text-slate-500 font-medium mt-6 font-josefin text-center max-w-prose mx-auto">
                        Explore pre-vetted investment opportunities available in a growing number of industry categories.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-14 w-full max-w-4xl mx-auto h-max">
                    <Card1
                        img="/image-1.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                    <Card1
                        img="/image-2.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                    <Card1
                        img="/image-3.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                    <Card1
                        img="/image-4.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                    <Card1
                        img="/image-5.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                    <Card1
                        img="/image-1.png"
                        title="Oxalis"
                        subTitle="Brooklyn, NY"
                        text="A recognized leader in language immersion & early education, opening second school."
                    />

                </div>

                <button className="btn btn-error btn-outline pt-0 pb-0 px-10 py-5 rounded-none mx-auto hover:!text-white block mt-12 uppercase">
                    view all projects
                </button>
            </div>

            <div className="mt-40 py-16 bg-[#ECF4FD] relative">

                <img
                    alt=""
                    src="/vector-1.png"
                    className="absolute bottom-0 left-0 w-72 h-auto"
                />

                <img
                    alt=""
                    src="/vector-2.png"
                    className="absolute top-0 right-6 w-16 h-auto"
                />

                <div className="w-10/12 mx-auto grid grid-cols-2 gap-4 z-10 relative">

                    <div>
                        <h2 className="text-2xl text-slate-800 font-bold font-josefin">
                            $7M+ paid out to<br />investors
                        </h2>
                        <p className="text-sm text-slate-500 font-josefin mt-6 max-w-[45ch]">
                            Next Invest has already paid out over $7M in cash returns to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
                        </p>
                    </div>

                    <img
                        alt=""
                        src="/chart.png"
                        className="w-[22rem] h-auto place-self-center"
                    />

                </div>
            </div>

            <div className="mt-40">
                <div className="w-10/12 mx-auto grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-2xl text-slate-800 font-bold font-josefin">
                            Lookin to raise capital<br /> for your growing business ?
                        </h2>
                        <p className="text-sm text-slate-500 font-josefin mt-6 max-w-[45ch]">
                            Whether expanding or opening a brand-new concept, we make it easy to raise money from thousands of local investors.
                        </p>

                        <button className="btn btn-primary mt-10 pt-0 pb-0 py-6 px-10 rounded-none uppercase text-white">
                            apply online
                        </button>
                    </div>

                    <img
                        alt=""
                        src="/cuate.png"
                        className="w-72 h-auto place-self-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage