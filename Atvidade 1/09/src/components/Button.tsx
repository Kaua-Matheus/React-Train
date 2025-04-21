import { ReactNode } from 'react';

interface PropsButton {
    children?: ReactNode,
    onClick?: () => void,
    type?: "Verde" | "Vermelho",
}

export default function Button(
    {
        children,
        onClick,
        type = "Verde",
    }: PropsButton
) {
    return (
        <>
            {type == "Verde" && (
                <button
                onClick={onClick}
                style={{
                    background: 'green',
                }}
                >
                    {children}
                </button>
            ) || type == "Vermelho" && (
                <button
                onClick={onClick}
                style={{
                    background: 'red',
                }}
                >
                    {children}
                </button>
            )}
        </>
    )
}