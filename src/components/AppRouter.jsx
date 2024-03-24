import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import { Routes, Route } from 'react-router-dom'
import Post from '../pages/Post'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  )
}

export default AppRouter
