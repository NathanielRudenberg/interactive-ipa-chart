// Load Pyodide
importScripts("https://cdn.jsdelivr.net/pyodide/v0.28.3/full/pyodide.js");

let pyodide;

async function loadPyodideAndPackages() {
    pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.28.3/full/",
    });


    // Fetch the audio file
    const audioTest = await fetch('pythonFiles/audio/the_north_wind_and_the_sun.wav');
    if (!audioTest.ok) {
        throw new Error(`HTTP error! status: ${audioTest.status}`);
    }
    const data = await audioTest.arrayBuffer();

    // Get a reference to the virtual filesystem
    const FS = pyodide.FS;

    // Create directories and write the file
    FS.mkdir('/audio');
    FS.mkdir('/audio/practiceCalibration');
    FS.writeFile('/audio/the_north_wind_and_the_sun.wav', new Uint8Array(data));

    await pyodide.loadPackage("micropip");
    await pyodide.runPythonAsync(`
                import micropip
                await micropip.install('matplotlib')
                await micropip.install('seaborn')
                await micropip.install('soundfile')
                await micropip.install('/pythonFiles/praat_parselmouth-0.5.0.dev0-cp313-cp313-pyodide_2025_0_wasm32.whl')
                
                print("Ready!")
  `);
    self.postMessage({ ready: true });
}

const pyodideReadyPromise = loadPyodideAndPackages();

self.onmessage = async (event) => {
    await pyodideReadyPromise;
    const { id, python, fileName, fileData } = event.data;

    if (python) {
        try {
            await pyodide.loadPackagesFromImports(python);
            const output = await pyodide.runPythonAsync(python);
            self.postMessage({ id, result: output });
        } catch (error) {
            self.postMessage({ id, error: error.message });
        }
    } else if (fileName && fileData) {
        console.log('Trying to store file in Pyodide FS:', fileName);
        try {
            pyodide.FS.writeFile(fileName, fileData);
            self.postMessage({ fileStored: fileName });
        } catch (error) {
            self.postMessage({ id, error: `File storage failed: ${error.message}` });
        }
    }
};
