import { ApplicationRoutes } from "../../routes"
import { Link } from "react-router-dom"


function Logo() {
    return (
        <Link to={ApplicationRoutes.home} className="flex-shrink-0">
            <img
                alt="logo"
                src={"/logo-green.png"}
                className="w-32 h-auto object-center object-cover"
            />
        </Link>
    )
}

export default Logo