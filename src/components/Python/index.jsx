import { useState } from 'react';
import { Pyodide } from '../../services/pyodide';

export default function Python() {
    const pyodide = Pyodide.getInstance();
    const [pyOutput, setPyOutput] = useState(" ");
    const [isReady, setIsReady] = useState(false);
    pyodide.setReady(setIsReady);

    // pyodide.setStdOut(text => {
    //     setPyOutput(text);
    // });

    const pythonCode = async () => {
        const code = await (await fetch('pythonFiles/testing-pyodide.py')).text();
        return code;
    }

    return (
        <>
        <p>{pyOutput}</p>
        <button
            onClick={async () => {
                try {
                    const pythonString = await pythonCode();
                    await pyodide.run(pythonString);
                } catch (error) {
                    console.error('Error running Python code:', error);
                }
            }}
            disabled={!isReady}
        >
            {isReady? "Pablo" : "Loading..."}
        </button>
        </>
    )
}