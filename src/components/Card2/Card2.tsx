
import { ReactNode } from "react"

interface Props {
    title: string;
    subTitle: string;
    text: string;
    bottom?: ReactNode;
}

function Card2({ subTitle, text, title, bottom }: Props) {
    return (
        <div className="relative shadow-[0_0_12px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(0,0,0,0.12)] transition-all duration-150">

            <div className="p-4">
                <h2 className="text-lg text-slate-900 font-bold font-josefin">
                    {title}
                </h2>
                <p className="text-sm text-slate-500 font-normal font-josefin">
                    {subTitle}
                </p>

                <p className="text-sm text-slate-800 font-normal font-josefin mt-6">
                    {text}
                </p>

                <hr className="my-6 border-b border-b-gray-300 w-full border-t-transparent" />

                <div className="flex flex-col gap-y-2">

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

            </div>

            <button className="w-full btn btn-error rounded-none text-white uppercase">
                View
            </button>

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

export default Card2