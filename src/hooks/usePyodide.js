import { useState, useEffect, useMemo } from 'react';
import { Pyodide } from '../services/pyodide';

export const usePyodide = () => {
    const [isPyodideReady, setIsPyodideReady] = useState(false);
    
    const pyodide = useMemo(() => Pyodide.getInstance(), []);

    useEffect(() => {
        pyodide.setReady(setIsPyodideReady);
    }, [pyodide]);

    return { pyodide, isPyodideReady };
};