import Home from './views/Home';
import About from './views/About';
import Practice from './views/Practice';
import NotFound from './views/NotFound';
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
        name: 'Practice',
        path: '/practice',
        component: Practice,
        featureFlag: 'vocal-practice-page'
    },
    {
        name: 'Not Found',
        path: '*',
        component: NotFound
    },
    // {
    //     name: 'Language Profile',
    //     path: '/languages/:lang',
    //     component: Languages
    // },
    // {
    //     name: 'Languages',
    //     path: '/languages',
    //     exact: true,
    //     component: Languages
    // },
    // {
    //     Name: 'Language Profile',
    //     path: '/:lang',
    //     component: Home
    // }
]
