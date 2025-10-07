import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appTheme = createTheme(({
    palette: {
        primary: {
            main: '#CBD4C2',
        },
        secondary: {
            main: '#967AA1'
        }
    }
}))

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
