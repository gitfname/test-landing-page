
interface Props {
    text: string;
}

function Tag({ text }: Props) {
    return (
        <p className="text-xs font-semibold w-max rounded-sm tracking-tighter bg-white/80 py-1.5 px-2 uppercase leading-none text-slate-900">{text}</p>
    )
}

export default Tag