import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appTheme = createTheme(({
    palette: {
        background: {
            default: '#FDF6EC'
        },
        primary: {
            main: '#CBD4C2',
        },
        secondary: {
            main: '#967AA1'
        }
    },
    typography: {
        h1: {
            fontSize: '2em',
            fontWeight: 700,
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em'
        },
        h2: {
            fontSize: '1.5em',
            fontWeight: 700,
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em'
        },
        h4: {
            fontSize: '1em',
            fontWeight: 700,
            marginBlockStart: '1.33em',
            marginBlockEnd: '1.33em'
        },
        body1: {
            lineHeight: 1.8
        },
        fontFamily: [
            'DejaVu Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif'
        ].join(',')
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
