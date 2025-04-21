import React, { useRef, useState, useMemo } from "react";

export default function Calculator() {
    const num1Ref = useRef<HTMLInputElement>(null);
    const num2Ref = useRef<HTMLInputElement>(null);
    const [operation, setOperation] = useState<string>("add");

    const result = useMemo(() => {
        const num1 = parseFloat(num1Ref.current?.value || "0");
        const num2 = parseFloat(num2Ref.current?.value || "0");

        switch (operation) {
            case "adição":
                return num1 + num2;
            case "subtração":
                return num1 - num2;
            case "multiplicação":
                return num1 * num2;
            case "divisão":
                return num2 !== 0 ? num1 / num2 : "Error (Divide by 0)";
            default:
                return 0;
        }
    }, [operation]);

    return (
        <div 
            style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
            <h2>Calculadora</h2>
            <div 
                style={{ marginBottom: "10px" }}>
                <input
                    ref={num1Ref}
                    type="number"
                    placeholder="Primeiro número"
                    style={{ marginRight: "10px" }}
                />
                <input
                    ref={num2Ref}
                    type="number"
                    placeholder="Segundo número"
                />
            </div>
            <div 
                style={{ marginBottom: "10px" }}>
                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    style={{ padding: "5px" }}
                >
                    <option value="adição">adição</option>
                    <option value="subtração">subtração</option>
                    <option value="multiplicação">multiplicação</option>
                    <option value="divisão">divisão</option>
                </select>
            </div>
            <div>
                <strong>Resultado:</strong> {result}
            </div>
        </div>
    );
}