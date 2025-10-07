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
    constructor() {
        this._worker = new Worker('pyodide-worker.js');
        this._isReady = false;
        this._readyCallbacks = [];
        this._runPromises = {};

        this._worker.onmessage = (event) => {
            const { id, ready, result, error, fileStored } = event.data;
            if (ready) {
                this._isReady = true;
                this._readyCallbacks.forEach((callback) => callback());
                this._readyCallbacks = [];
                return;
            }

            if (fileStored) {
                console.log('File stored:', fileStored);
                return;
            }

            if (id && this._runPromises[id]) {
                if (error) {
                    this._runPromises[id].reject(new Error(error));
                } else {
                    this._runPromises[id].resolve(result);
                }
                delete this._runPromises[id];
            }
        }
        this._pyodide = null;
        this._setIsReady = () => { };
    }

    // fileData needs to be a Uint8Array or ArrayBuffer
    storeFile(fileName, fileData) {
        console.log('Service is trying to store file in Pyodide FS:', fileName);
        this._worker.postMessage({ fileName, fileData });
    }

    setGlobal(name, value) {
        this._worker.postMessage({ name, value });
    }

    setReady(callback) {
        if (this._isReady) {
            callback(true);
        } else {
            this._readyCallbacks.push(() => { callback(true) });
        }
    }

    run(code) {
        return new Promise((resolve, reject) => {
            const id = `run_${Date.now()}_${Math.random()}`;
            this._runPromises[id] = { resolve, reject };
            this._worker.postMessage({ python: code, id: id });
        })
    }
}
