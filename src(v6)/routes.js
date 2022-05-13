import Home from './components/Home'
import Login from './components/Login'
import Blog from './components/Blog'
import PageNotFound from './components/PageNotFound'

const Routes = [
    { path: "/", exact: true, component: Home },
    { path: "/home", component: Home },
    { path: "/login", component: Login }, 
    { path: "/blog/:blogId", component: Blog },
    { path: "**", component: PageNotFound }
]

export default Routes