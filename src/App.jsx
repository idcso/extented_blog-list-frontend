import { useMemo, useState } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post title 1', body: 'Post description' },
    { id: 2, title: 'Post title 2', body: 'Post description' },
    { id: 3, title: 'Post title 3', body: 'Post description' },
    { id: 4, title: 'Post title 4', body: 'Post description' },
  ])
  const [filter, setFilter] = useState({ sort: '', search: '' })

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.search.toLowerCase())
    )
  }, [filter.search, sortedPosts])

  return (
    <div className="App">
      <PostForm create={handleCreatePost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={searchedAndSortedPosts}
        title="Posts list 1"
        remove={handleRemovePost}
      />
    </div>
  )
}

export default App
