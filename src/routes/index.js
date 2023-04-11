//Layouts
import { HeaderOnly } from '~/components/Layout';

//route config
import routesConfig from '~/config/routes';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//public routes
export const publicRoutes = [
    { path: routesConfig.home, conponent: Home },
    { path: routesConfig.following, conponent: Following },
    { path: routesConfig.profile, conponent: Profile },
    { path: routesConfig.upload, conponent: Upload, layout: HeaderOnly },
    { path: routesConfig.search, conponent: Search, layout: null },
];

export const priveToutes = [];
