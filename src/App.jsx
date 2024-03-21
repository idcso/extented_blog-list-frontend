import { useState, useEffect } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import postService from './API/postService'
import Loader from './components/UI/loader/Loader'
import useFetch from './hooks/useFetch'

const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)
  const [fetchPosts, postsLoaded, errorMessage] = useFetch(async () => {
    const posts = await postService.getAll()
    setPosts(posts)
  })
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search)

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={handleCreatePost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorMessage && <h1>Error: {errorMessage}</h1>}
      {postsLoaded ? (
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={searchedAndSortedPosts}
          title="Posts list"
          remove={handleRemovePost}
        />
      )}
    </div>
  )
}

export default App
