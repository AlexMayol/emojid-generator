type Props = {
    children: React.ReactNode;
    onClick: () => void,
    [key: string]: unknown
}


export const Button = ({ children, ...rest }: Props) => {

    return (
        <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            {...rest}
        >
            {children}
        </button>
    )
}
