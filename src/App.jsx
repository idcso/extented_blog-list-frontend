import { useState } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post title 1', body: 'Post description' },
    { id: 2, title: 'Post title 2', body: 'Post description' },
    { id: 3, title: 'Post title 3', body: 'Post description' },
    { id: 4, title: 'Post title 4', body: 'Post description' },
  ])
  return (
    <div className="App">
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

export default App
