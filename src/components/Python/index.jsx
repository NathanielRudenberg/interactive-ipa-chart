import { useState } from 'react';
import { usePyodide } from '../../hooks/usePyodide';
import { ThreeCircles, TailSpin, Grid, Audio } from 'react-loader-spinner';

export default function Python() {
    const [imageData, setImageData] = useState(null);
    const [error, setError] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const {pyodide, isPyodideReady} = usePyodide();

    const runPythonCode = async () => {
        setIsRunning(true);
        setError
        try {
            const code = await (await fetch('pythonFiles/testing-pyodide.py')).text();
            const result = await pyodide.run(code);
            setImageData(result);
        } catch (err) {
            console.error('Error running Python code:', err);
            setError(err.message);
        } finally {
            setIsRunning(false);
        }
    };

    if (!isPyodideReady || isRunning) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ThreeCircles
                    color="#CBD4C2"
                />
            </div>
        )
    }

    return (
        <>
            {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Python Plot" />}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <button
                    onClick={runPythonCode}
                    disabled={!isPyodideReady || isRunning}
                >
                    {isPyodideReady ? "Run" : "Loading..."}
                </button>
            </div>
        </>
    )
}
