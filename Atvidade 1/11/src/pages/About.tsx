import Calculator from "../components/Calculator"

export default function About() {
    return (
        <div
            style={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',

                gap: '20px',
            }}
        >
            <div>Essa é a página de informações sobre o site. Aqui tem uma calculadora!</div>

            <div>
                <Calculator />
            </div>
        </div>
    )
}