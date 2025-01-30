import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <h1>ASTRO ALEJANDRO</h1>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(count + 1)}>DALE</button>
        </div>
    );
};

export default Counter;
