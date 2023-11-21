
import { ReactNode } from "react"
import TopNavigation from "../LayoutComponents/TopNavigation";
import Footer from "../components/Footer/Footer";

interface Props {
    children: ReactNode;
}

function ApplicationLayout({ children }: Props) {
    return (
        <div>

            {/* top navigation */}
            <TopNavigation />

            <main>
                {children}
            </main>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default ApplicationLayout