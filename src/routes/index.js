import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
//public routes
export const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/following', conponent: Following },
    { path: '/profile', conponent: Profile, layout: 1 },
];

export const priveToutes = [];
