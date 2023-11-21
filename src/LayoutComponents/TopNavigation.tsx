
import LoginButton from "../components/Buttons/Login/LoginButton"
import RegisterButton from "../components/Buttons/Register/RegisterButton"
import Logo from "../components/Logo/Logo"
import { ChevronDown } from "lucide-react"

function TopNavigation() {
    return (
        <nav className="w-full py-4 px-12 z-20 relative">
            <div className="w-max mx-auto flex items-center justify-between gap-x-32">
                <Logo />

                <div className="flex items-center gap-x-6">
                    <div className="flex items-center gap-x-4">
                        <div className="dropdown dropdown-end group">
                            <label tabIndex={0} className="btn btn-link rounded-sm btn-sm text-gray1 !no-underline px-0 gap-x-1.5 group">
                                Investment Opportunities
                                <ChevronDown width={18} height={18} strokeWidth={1.3} className="group-focus:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 1</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 2</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 3</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 4</a></li>
                            </ul>
                        </div>

                        <div className="dropdown dropdown-end group">
                            <label tabIndex={0} className="btn btn-link rounded-sm btn-sm text-gray1 !no-underline px-0 gap-x-1.5 group">
                                How it works
                                <ChevronDown width={18} height={18} strokeWidth={1.3} className="group-focus:rotate-180 group-focus-within:rotate-180 transition-transform duration-300" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 1</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 2</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 3</a></li>
                                <li><a className="active:!bg-transparent/10 active:!text-slate-800">Item 4</a></li>
                            </ul>
                        </div>

                        <button className="btn btn-link btn-sm text-gray1 no-underline px-0">
                            About us
                        </button>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <LoginButton />
                        <RegisterButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNavigation