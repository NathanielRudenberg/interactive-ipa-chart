import { loadPyodide } from "pyodide";

export const Pyodide = (function () {
    let instance;
    function createInstance() {
        const pythonRunner = new PythonRunner();
        return pythonRunner;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

class PythonRunner {
    constructor(setIsReady) {
        this._stdOut = console.log;
        this._stdErr = console.error;
        this._pyodide = null;
        this._setIsReady = () => { };
        loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/",
            stderr: (text) => {
                this._stdErr(text);
            },
            stdout: (text) => {
                this._stdOut(text);
            },
        }).then(async (result) => {
            this._pyodide = result;
            const FS = this._pyodide.FS;

            try {
                const response = await fetch('pythonFiles/audio/the_north_wind_and_the_sun.wav');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.arrayBuffer();

                FS.mkdir('/audio');
                FS.writeFile('/audio/the_north_wind_and_the_sun.wav', new Uint8Array(data));

                await this._pyodide.loadPackage('micropip');
                await this._pyodide.runPythonAsync(`
                import micropip
                await micropip.install('matplotlib')
                await micropip.install('seaborn')
                await micropip.install('/pythonFiles/praat_parselmouth-0.5.0.dev0-cp313-cp313-pyodide_2025_0_wasm32.whl')
                
                print("Ready!")
            `);

                console.log(
                    this._pyodide.runPython(`
                    import sys
                    sys.version
                `));
                this._setIsReady(true);
                // this._stdOut = console.log;
            } catch (error) {
                console.error('Error', error);
            }
        });
    }

    setStdOut(output) {
        this._stdOut = output;
    }

    setStdErr(output) {
        this._stdErr = output;
    }

    setReady(fn) {
        this._setIsReady = fn;
    }

    run(code) {
        if (this._pyodide) {
            return this._pyodide.runPython(code);
        }
    }
}