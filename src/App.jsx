import { useState } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post title 1', body: 'Post description' },
    { id: 2, title: 'Post title 2', body: 'Post description' },
    { id: 3, title: 'Post title 3', body: 'Post description' },
    { id: 4, title: 'Post title 4', body: 'Post description' },
  ])
  const [post, setPost] = useState({ title: '', body: '' })

  const createNewPost = (event) => {
    event.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form onSubmit={createNewPost}>
        <MyInput
          value={post.title}
          type="text"
          placeholder="post title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          value={post.body}
          type="text"
          placeholder="post description"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton>create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

export default App
