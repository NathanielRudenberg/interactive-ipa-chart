import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css';
import App from './App';
import { FeatureFlagProvider } from './components/FeatureFlagContext';
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
            fontSize: '2.5em',
            fontWeight: 500,
            marginBlockStart: '0.67em',
            marginBlockEnd: '0.67em',
            letterSpacing: '0.08em'
        },
        h2: {
            fontSize: '2em',
            fontWeight: 500,
            marginBlockStart: '0.83em',
            marginBlockEnd: '0.83em'
        },
        h3: {
            fontSize: '1.67em',
            fontWeight: 500,
            marginBlockStart: '1em',
            marginBlockEnd: '1em'
        },
        h4: {
            fontSize: '1.5em',
            fontWeight: 500,
            marginBlockStart: '1.33em',
            marginBlockEnd: '1.33em'
        },
        h5: {
            fontSize: '1.25em',
            fontWeight: 500,
            marginBlockStart: '1.67em',
            marginBlockEnd: '1.67em'
        },
        h6: {
            fontSize: '1em',
            fontWeight: 500,
            marginBlockStart: '2.33em',
            marginBlockEnd: '2.33em'
        },
        body1: {
            lineHeight: 1.8,
            fontSize: '1em'
        },
        body2: {
            lineHeight: 1.6,
            fontSize: '0.875em'
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
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                disableRipple: true,
            }
        },
        MuiToggleButton: {
            defaultProps: {
                disableRipple: true,
            }
        }
    }
}))

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <FeatureFlagProvider>
                <App />
            </FeatureFlagProvider>
        </ThemeProvider>
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
