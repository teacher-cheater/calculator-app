import { useState } from "react";
import './Calculator.scss';
import { parseAndCalculate } from "../calculator";

const Calculator = () => {
    const [input, setInput] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const appendToInput = (value: string) => {
        setInput(input + value);
    };

    const calculate = () => {
        try {
            const calculatedResult = parseAndCalculate(input);
            setResult(calculatedResult.toString());
        } catch (error) {
            setResult("Ошибка");
        }
    };

    const clearInput = () => {
        setInput("");
        setResult("");
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            calculate();
        } else if (event.key === "Escape") {
            clearInput();
        }
    };
  return (
    <div className="container">
    <div className="wrap">
        <div className="calculator">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <div className="result">{result}</div>
            <div className="buttons">
                <button onClick={clearInput}>C</button>
                <button onClick={() => appendToInput("√")}>√</button>
                <button onClick={() => appendToInput("%")}>%</button>
                <button onClick={() => appendToInput("/")}>/</button>
                <button onClick={() => appendToInput("7")}>7</button>
                <button onClick={() => appendToInput("8")}>8</button>
                <button onClick={() => appendToInput("9")}>9</button>
                <button onClick={() => appendToInput("×")}>×</button>
                <button onClick={() => appendToInput("4")}>4</button>
                <button onClick={() => appendToInput("5")}>5</button>
                <button onClick={() => appendToInput("6")}>6</button>
                <button onClick={() => appendToInput("-")}>-</button>
                <button onClick={() => appendToInput("1")}>1</button>
                <button onClick={() => appendToInput("2")}>2</button>
                <button onClick={() => appendToInput("3")}>3</button>
                <button onClick={() => appendToInput("+")}>+</button>
                <button onClick={() => appendToInput("00")}>00</button>
                <button onClick={() => appendToInput("0")}>0</button>
                <button onClick={() => appendToInput(",")}>,</button>
                <button className="active" onClick={calculate}>
                    =
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Calculator