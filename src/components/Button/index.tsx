type Props = {
    children: React.ReactNode;
    onClick: () => void,
    [key: string]: unknown
}


export const Button = ({ children, ...rest }: Props) => {

    return (
        <button className="p-4 text-white transition bg-pink-500 rounded-xl hover:bg-pink-600" {...rest}>{children}</button>
    )
}
