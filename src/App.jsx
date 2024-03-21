import { useState } from 'react'
//import Counter from './components/Counter'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post title 1',
      body: 'Post description',
    },
    {
      id: 2,
      title: 'Post title 2',
      body: 'Post description',
    },
    {
      id: 3,
      title: 'Post title 3',
      body: 'Post description',
    },
    {
      id: 4,
      title: 'Post title 4',
      body: 'Post description',
    },
  ])
  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search)

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
      <PostList
        posts={searchedAndSortedPosts}
        title="Posts list 1"
        remove={handleRemovePost}
      />
    </div>
  )
}

export default App
