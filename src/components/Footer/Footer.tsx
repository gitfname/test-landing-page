
import { ChevronUp, ChevronRight, Facebook, Twitter, Instagram } from "lucide-react"

function Footer() {
    return (
        <footer className="p-12 bg-[#ECECEC]">
            <div className="w-full grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
                <div className="h-32">
                    <img
                        alt=""
                        src="/logo-black.png"
                        className="w-32 h-auto"
                    />

                    <p className="text-sm text-slate-500 font-normal font-josefin mt-5">
                        Copyright © 2020. LogoIpsum. All rights reserved.
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-900 font-semibold font-josefin">
                        Services
                    </p>

                    <div className="flex flex-col gap-y-2 mt-3">
                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Email Marketing
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Cammpaigns
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Branding
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Offline
                        </p>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-slate-900 font-semibold font-josefin">
                        About
                    </p>

                    <div className="flex flex-col gap-y-2 mt-3">
                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Our Story
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Benifits
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Team
                        </p>

                        <p className="text-sm text-slate-600 font-normal font-josefin hover:text-slate-800 transition-colors hover:underline cursor-pointer">
                            Careers
                        </p>
                    </div>
                </div>

                <div>
                    <button className="btn btn-primary rounded-full text-white btn-circle btn-sm">
                        <ChevronUp width={20} height={20} strokeWidth={1.3} />
                    </button>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between border">
                <div className="w-full max-w-xs">
                    <p className="text-sm text-slate-800 font-medium font-josefin mb-1">
                        Subscribe to our newsletter
                    </p>
                    <div className="w-full flex items-center gap-0 border-b border-b-slate-300">
                        <input
                            placeholder="Email addres"
                            className="input input-sm font-josefin bg-transparent rounded-b-none !text-xs flex-1"
                        />
                        <button className="btn btn-sm btn-error text-white rounded-b-none">
                            <ChevronRight width={18} height={18} strokeWidth={1.3} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    <Facebook width={18} height={18} strokeWidth={1.3} className="fill-slate-800" />
                    <Twitter width={18} height={18} strokeWidth={1.3} className="fill-slate-800" />
                    <Instagram width={18} height={18} strokeWidth={1.3} className="stroke-slate-800" />
                </div>
            </div>
        </footer>
    )
}

export default Footer