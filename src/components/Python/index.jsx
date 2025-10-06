import { useState } from 'react';
import { Pyodide } from '../../services/pyodide';
import { ThreeCircles, TailSpin, Grid, Audio } from 'react-loader-spinner';

export default function Python() {
    const pyodide = Pyodide.getInstance();
    const [pyOutput, setPyOutput] = useState(" ");
    const [isReady, setIsReady] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    pyodide.setReady(setIsReady);

    // pyodide.setStdOut(text => {
    //     setPyOutput(text);
    // });

    const pythonCode = async () => {
        const code = await (await fetch('pythonFiles/testing-pyodide.py')).text();
        return code;
    }

    if (!isReady || isRunning) {
        return <Audio
            color="#CBD4C2"
        />
    }

    return (
        <>
            <p>{pyOutput}</p>
            <button
                onClick={async () => {
                    try {
                        setIsRunning(true);
                        const pythonString = await pythonCode();
                        await pyodide.run(pythonString);
                        setIsRunning(false);
                    } catch (error) {
                        console.error('Error running Python code:', error);
                    }
                }}
                disabled={!isReady || isRunning}
            >
                {isReady ? "Run" : "Loading..."}
            </button>
        </>
    )
}
