import Home from './views/Home';
import About from './views/About';
import Languages from './views/Languages';

export default [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'Languages',
        path: '/languages',
        exact: true,
        component: Languages
    },
    {
        name: 'Language Profile',
        path: '/language/:lang',
        component: Languages
    },
]