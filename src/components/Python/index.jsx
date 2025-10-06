import { useState, useEffect } from 'react';
import { Pyodide } from '../../services/pyodide';
import { ThreeCircles, TailSpin, Grid, Audio } from 'react-loader-spinner';

export default function Python() {
    const pyodide = Pyodide.getInstance();
    const [imageData, setImageData] = useState(null);
    const [error, setError] = useState(null);
    const [pyOutput, setPyOutput] = useState(" ");
    const [isReady, setIsReady] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        pyodide.setReady(setIsReady);
    }, [pyodide]);

    const pythonCode = async () => {
        const code = await (await fetch('pythonFiles/testing-pyodide.py')).text();
        return code;
    }

    if (!isReady || isRunning) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ThreeCircles
                    color="#CBD4C2"
                />
            </div>
        )
    }

    console.log('image data:', imageData);

    return (
        <>
            {imageData && <img src={`data:image/png;base64,${imageData}`} alt="Python Plot" />}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button
                onClick={async () => {
                    try {
                        setIsRunning(true);
                        const pythonString = await pythonCode();
                        const result = await pyodide.run(pythonString);
                        setPyOutput(String(result || ''));
                        setIsRunning(false);
                        setImageData(result);
                    } catch (error) {
                        console.error('Error running Python code:', error);
                        setIsRunning(false);
                    }
                }}
                disabled={!isReady || isRunning}
            >
                {isReady ? "Run" : "Loading..."}
            </button>
        </>
    )
}
