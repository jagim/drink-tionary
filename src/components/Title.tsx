import Logo from "./Logo"

type TitleProps = {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <div className="flex lg:flex-row items-center justify-between flex-col border-b-[3px] border-lime-600 mx-5 mb-10">
            <Logo />
            <h2 className="text-5xl font-bold mt-5">{title}</h2>
        </div>
    )
}
