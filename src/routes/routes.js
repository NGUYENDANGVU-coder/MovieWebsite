//Pages
import Home from "../pages/Home";
import Detail from "../pages/detail/Detail";
import Catalog from "../pages/Catalog";

import configs from "../config";
const publicRoutes=[
    {path:configs.routes.home,component: Home},
    {path:configs.routes.detail,component: Detail},
    {path:configs.routes.catalog,component: Catalog},
    {path:configs.routes.search,component: Catalog},
];
const privateRoutes=[
    
]
export {publicRoutes,privateRoutes};