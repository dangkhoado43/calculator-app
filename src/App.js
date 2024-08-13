import "./App.css";
import { useState } from "react";

function App() {
    const [value, setValue] = useState("");

    const handleCalculator = () => {
        try {
            setValue(eval(value));
        } catch (err) {
            setValue("Error");
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <form action="">
                    <div className="text-box">
                        <input type="text" value={value} />
                    </div>
                    <div className="">
                        <input
                            type="button"
                            className=""
                            value="AC"
                            onClick={() => setValue("")}
                        />
                        <input
                            className=""
                            type="button"
                            value="DE"
                            onClick={() => setValue(value.slice(0, -1))}
                        />
                        <input
                            className=""
                            type="button"
                            value="."
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="/"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className=""
                            type="button"
                            value="7"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="8"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="9"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="*"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className=""
                            type="button"
                            value="4"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="5"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="6"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="+"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className=""
                            type="button"
                            value="1"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="2"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="3"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            className=""
                            type="button"
                            value="-"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="button"
                            value="00"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            type="button"
                            value="0"
                            onClick={(e) => setValue(value + e.target.value)}
                        />
                        <input
                            type="button"
                            value="="
                            className="equal"
                            onClick={handleCalculator}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
