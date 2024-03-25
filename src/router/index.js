import About from '../pages/About'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import Error from '../pages/Error'
import Login from '../pages/Login'

export const privateRouter = [
  { path: '/about', element: About },
  { path: '/posts', element: Posts },
  { path: '/posts/:id', element: Post },
  { path: '/error', element: Error },
]

export const publicRouter = [
  { path: '/login', element: Login },
]