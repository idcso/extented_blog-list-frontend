import { useState } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post title 1', body: 'Post description' },
    { id: 2, title: 'Post title 2', body: 'Post description' },
    { id: 3, title: 'Post title 3', body: 'Post description' },
    { id: 4, title: 'Post title 4', body: 'Post description' },
  ])

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <PostForm create={handleCreatePost} />
      {posts.length ? (
        <PostList
          posts={posts}
          title="Posts list 1"
          remove={handleRemovePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found</h1>
      )}
    </div>
  )
}

export default App
