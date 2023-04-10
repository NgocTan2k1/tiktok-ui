//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//public routes
export const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/following', conponent: Following },
    { path: '/@:nickname', conponent: Profile },
    { path: '/upload', conponent: Upload, layout: HeaderOnly },
    { path: '/search', conponent: Search, layout: null },
];

export const priveToutes = [];
