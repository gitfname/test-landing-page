
import { ReactNode } from "react"
import Tag from "../Tag/Tag";
import Card3 from "../Card3/Card3";

interface Props {
    tags?: string[];
    img: string;
    title: string;
    subTitle: string;
    text: string;
    bottom?: ReactNode;
}

function Card1({ img, subTitle, text, title, bottom, tags }: Props) {
    return (
        <div className="relative group overflow-hidden shadow-[0_0_12px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.12)] transition-all duration-150">

            <div className="absolute top-4 left-4 flex items-center gap-x-2">
                <Tag text="house" />
                <Tag text="family business" />
            </div>

            <img
                alt=""
                src={img}
                className="w-full h-auto object-center object-cover"
            />

            <div className="w-full h-52"></div>

            <div className="absolute group-hover:delay-100 bottom-0 overflow-y-hidden group-hover:overflow-y-auto left-0 translate-y-1/2 h-full group-hover:translate-y-0 transition-transform duration-300 bg-white">

                <div className="p-3.5">
                    <h2 className="text-lg text-slate-900 font-bold font-josefin">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-500 font-normal font-josefin">
                        {subTitle}
                    </p>

                    <p className="text-sm text-slate-800 font-normal font-josefin mt-5">
                        {text}
                    </p>

                    <Card3 />
                </div>

                <hr className="my-6 border-b border-b-gray-300 w-full border-t-transparent opacity-0 group-hover:opacity-100" />

                <div className="flex flex-col gap-y-2 p-4">

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-700 font-normal font-josefin">
                            Security Type
                        </p>
                        <p className="text-sm text-slate-800 font-semibold font-josefin">
                            whatever
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-700 font-normal font-josefin">
                            Investment Multiple
                        </p>
                        <p className="text-sm text-slate-800 font-semibold font-josefin">
                            Maturity
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-700 font-normal font-josefin">
                            Mautirty
                        </p>
                        <p className="text-sm text-slate-800 font-semibold font-josefin">
                            Whatever
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-700 font-normal font-josefin">
                            Min. Investment
                        </p>
                        <p className="text-sm text-slate-800 font-semibold font-josefin">
                            whatever
                        </p>
                    </div>

                </div>

                <button className="w-full btn btn-error rounded-none text-white uppercase mt-6">
                    View
                </button>
            </div>

            {
                bottom
                    ?
                    bottom
                    :
                    null
            }
        </div>
    )
}

export default Card1