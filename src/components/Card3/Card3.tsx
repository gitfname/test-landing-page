
function Card3() {
    return (
        <div className="w-full">
            <progress value={50} max={100} className="progress w-full progress-primary"></progress>
            <div className="flex items-center gap-x-2 mt-1">
                <p className="text-sm text-primary font-semibold font-josefin">
                    $574,920
                </p>
                <p className="text-sm text-slate-800 font-normal font-josefin">raised $1,000,000</p>
            </div>
        </div>
    )
}

export default Card3