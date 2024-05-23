type NoContentProps = {
    message: string
}

export default function NoContent({ message }: NoContentProps) {
    return (
        <div className="flex flex-col relative container">
            <p className="text-2xl font-bold absolute top-20 left-[40%]">{message}</p>
            <img
                src="./Drink-Tionary-noSearch.png"
                alt="no drinks image"
                className="w-auto opacity-20" />
        </div>
    )
}
